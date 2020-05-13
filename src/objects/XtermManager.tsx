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
    fitAddon = new FitAddon();
    container:HTMLElement;
    promptString:string;
    userLine:string = "";
    currPos:number = 0;
    cbNewLine:(newLine:string)=> any;
    
    constructor(container:HTMLElement,promptString:string, callback:(newLine:string)=> any)
    {
        this.container = container;
        
        window.addEventListener('resize',
            (ev)=>{
                console.log("resize");
                this.fitAddon.fit();
            }
        ) ;

        
        this.term.loadAddon(this.fitAddon);
        this.term.open(this.container);
        this.fitAddon.fit();



        this.promptString = promptString; 
        this.prompt();
        this.term.onKey(this.handleKeyEvents.bind(this));
        this.cbNewLine = callback;
    }

    prompt()
    {
        this.term.write(this.promptString);
    }

    write(message:string)
    {
        this.term.write(message);
    }

    handleKeyEvents(key)
    {
        /*
        console.log(this)
        console.log("pos");
        console.log(this.currPos);
        console.log("userLine")
        console.log(this.userLine)
        console.log(key);
        */
        switch(key.domEvent.keyCode)
        {

            case(13): // \r
                if(this.userLine.length != 0)
                {
                    this.term.write("\r\n");
                    var display
                    this.cbNewLine(this.userLine).then((results)=>{
                        console.log("callback")
                        display = results;
                        console.log("new line - " + display);
                        this.write(display);
                        this.userLine = "";
                        this.currPos = 0;
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
                        console.log(this.userLine);
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
            case(40): //down
                break;
            case(39): //right   
                console.log(this.currPos)
                console.log(this.userLine.length)
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
                if(this.currPos >= this.userLine.length)
                {
                    this.currPos++;
                }
                this.userLine += key.key;
                this.term.write(key.key);
        }
        
    }
}

/*
 

*/
export default XtermManager;
