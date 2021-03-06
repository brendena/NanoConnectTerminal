import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';


//https://medium.com/codingtown/xterm-js-terminal-2b19ccd2a52
//light wrapper for xterm
//https://github.com/nodebotanist/xterm-browser-terminal-framework




class XtermManager
{
    term = new Terminal({
        cursorBlink:true
    });
    fitAddon = new FitAddon(); //xterm make it resize
    container:HTMLElement;    
    promptString:string;
    userLine:string = "";
    currPos:number = 0;
    locked:Boolean = false;
    history:string[] = [];
    historySelectedIndex:number = -1;
    cbNewLine:(newLine:string)=> any;
    
    constructor(container:HTMLElement,promptString:string, callback:(newLine:string)=> any)
    {
        this.container = container;
        
        window.addEventListener('resize',
            (ev)=>{
                this.fitAddon.fit();
            }
        ) ;

        
        this.term.loadAddon(this.fitAddon);
        this.term.open(this.container);
        this.fitAddon.fit();



        this.promptString = promptString; 
        this.prompt();
        this.term.onKey(this.handleKeyEvents.bind(this));
        this.term.attachCustomKeyEventHandler(this.customKeyEventHandler.bind(this))

        //supposidly it can work on past data
        this.term.onData((data, encoding) => 
        {
            //if length isn't one and char code not esc then it's probably a copy paste
            if(data.length != 1 && data.charCodeAt(0) != 27)
            {
                this.spliceUserWord(this.currPos,data,false);
            }
            
        });
        
        this.cbNewLine = callback;
    }

    prompt()
    {
        this.term.write(this.promptString);
    }
    changeKeyEventLock(lockState:Boolean)
    {
        this.locked = lockState;
    }



    write(message:string)
    {
        this.term.write(message);
    }

    moveToPos(pos:number)
    {
        if(pos > -1 && pos < this.userLine.length)
        {
            var terminalMessage = "";
            if(pos < this.currPos)
            {
                for(var i =0; i < (this.currPos - pos); i++)
                {
                    terminalMessage = terminalMessage.concat("\b");
                } 
            }
            else
            {
                for(var i =0; i < (pos - this.currPos); i++)
                {
                //    output = output.concat("\b \b");
                } 
            }
            this.write(terminalMessage);
            this.currPos = pos;
        }
    }

    setUserLine(newUserLine:string)
    {
        var output = ""
        for(var i =0; i < this.currPos; i++)
        {
            output = output.concat("\b \b");
        }
        output = output.concat(newUserLine);
        this.userLine = newUserLine;
        this.currPos = newUserLine.length;
        this.write(output);
    }

    resetUserLine()
    {
        this.userLine = "";
        this.currPos = 0;
        this.historySelectedIndex = this.history.length;
    }

    spliceUserWord(pos:number,string:string,stayInPlace:boolean)
    {
        var start = this.userLine.slice(0,this.currPos);
        var end = this.userLine.slice(this.currPos,this.userLine.length);
        this.userLine = start + string + end;
        var tmpCurrentPossition = this.currPos;
        this.setUserLine(this.userLine);
        if(stayInPlace)
        {
            this.moveToPos(tmpCurrentPossition + 1);
        }
    }


    customKeyEventHandler(event:KeyboardEvent)
    {
        
        //*
        if(event.ctrlKey)
        {
            if(event.keyCode == 67 || //c
               event.keyCode == 86 || //v
               event.keyCode == 82)   //r 
            {
                return false;
            }
        }
        //*/
        return true;
    }
    handleKeyEvents(key)
    {
        if(this.locked){
            return;
        }
        
        switch(key.domEvent.keyCode)
        {

            case(13): // \r
                if(this.userLine.length != 0)
                {
                    this.term.write("\r\n");
                    var display
                    this.cbNewLine(this.userLine).then((results)=>{
                        display = results;
                        this.write(display);
                        this.history.push(this.userLine);
                        this.resetUserLine();
                        this.prompt();

                        
                    }).catch((catchError)=>{
                        console.log(catchError.toString())
                        this.write(catchError.toString());
                        this.write("\r\n");
                        this.resetUserLine();
                        this.prompt();
                    });

                    

                }
                break;
            case(8): // backspace
                if(this.userLine.length > 0){
                    
                    var output = "";
                    if(this.currPos == 0)
                    {
                        this.userLine = this.userLine.slice(1,this.userLine.length);
                        output = this.userLine;
                    }
                    else 
                    {

                        this.term.write("\b \b");

                        var start = this.userLine.slice(0,this.currPos-1);
                        var end = this.userLine.slice(this.currPos,this.userLine.length);
                        this.userLine = start + end;
                        output = end;
                        this.currPos--;
                    }


                    output = output.concat(" ")
                    let outputLength = output.length
                    for(let i =0; i < outputLength;i++){
                        output = output.concat("\b");
                    }
                    this.term.write(output);
                }
                
                break;
            case(38): //up
                this.historySelectedIndex-=2; //for the offset going up one bellow
            case(40): //down
                this.historySelectedIndex++;
                //cycle through all the options
                if(this.historySelectedIndex <= -1){
                    this.historySelectedIndex = 0;
                } 
                if(this.historySelectedIndex >= this.history.length)
                {
                    this.historySelectedIndex = this.history.length -1;
                }
                if(this.history.length > 0)
                {
                    this.setUserLine(this.history[this.historySelectedIndex]);
                }
                break;
            case(39): //right   
                if(this.currPos < this.userLine.length)
                {
                    this.currPos++;
                    this.term.write(key.key);
                }
                break;
            case(37): //left
                if(this.currPos > 0)
                {
                    this.currPos--;
                    this.term.write(key.key);
                }
                break;
            default:
                var charValue = key.key.charCodeAt(0);
                if(charValue > 31 && charValue < 127 )
                {
                    if(this.currPos >= this.userLine.length)
                    {
                        this.currPos++;
                    }
                    //changing something in the middle of the terminal
                    if(this.currPos < this.userLine.length)
                    {
                        this.spliceUserWord(this.currPos,key.key,true);
                    }
                    //else just add it to the end
                    else
                    {
                        this.userLine += key.key;
                        this.term.write(key.key);
                    }
    
                }
        }
        
    }
}

export default XtermManager;
