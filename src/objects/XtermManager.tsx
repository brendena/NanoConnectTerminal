import { Terminal } from 'xterm';


//https://medium.com/codingtown/xterm-js-terminal-2b19ccd2a52
//light wrapper for xterm
//https://github.com/nodebotanist/xterm-browser-terminal-framework




class XtermManager
{
    term = new Terminal({
        cursorBlink:true
    });
    container:HTMLElement;
    userLine:string = "";
    currPos:number = 0;
    cbNewLine:(newLine:string)=> void;
    
    constructor(container:HTMLElement, callback:(newLine:string)=> void)
    {
        this.container = container;
        this.term.open(this.container);
        this.prompt();
        this.term.onKey(this.handleKeyEvents.bind(this));
        this.cbNewLine = callback;
    }

    prompt()
    {
        this.term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
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
                    this.cbNewLine(this.userLine);
                    this.userLine = "";
                    this.currPos = 0;
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
