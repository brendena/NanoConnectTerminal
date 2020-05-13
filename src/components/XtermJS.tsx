import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import XtermManager from '../objects/XtermManager'
import yargsBrowser from 'yargs_browser/dist/index'



import '../../node_modules/xterm/css/xterm.css';
import './XtermJS.css';

var BrowserFS = require("browserfs")
var fs = BrowserFS.BFSRequire('fs');
BrowserFS.configure({ fs: "LocalStorage" }, function (e) {
    console.log(e);
    console.log("e is nothing")
});

var yargs = require('yargs')
var NanoConnectClient = require('nanoconnect/clientMessagesIndex')
var executeNanoTerminal = require('nanoconnect/clientTerminal')

var nanoClient = new NanoConnectClient("magnet:?xt=urn:btih:dd59ca795c689b00713f9f2bb15379b32bb13cbc&dn=DataSheBlow.png&tr=ws://localhost:8000",{port:6881});


//https://medium.com/codingtown/xterm-js-terminal-2b19ccd2a52
//light wrapper for xterm
//https://github.com/nodebotanist/xterm-browser-terminal-framework

//way's to format the text
//https://notes.burke.libbey.me/ansi-escape-codes/

var timeThrough = 0;
const XtermJS: React.FC = () => {

    const container = useRef();

    useEffect(() => {
        // Every time the component has been re-rendered,
        // the counter is incremented
        console.log("---------------")
        if (timeThrough == 1) {
            console.log('adding manager')

            setTimeout(function () {
                                                                                         //38;2;r;g;b
                var xtermManger = new XtermManager(container.current,'\x1B[1;3;38;2;0;0;255mNanoConnect@root\x1B[0m:/ ',

                    async (newLine: string) => {
                       
                        return  new  Promise(async (resolve, reject) => {
                            

                            if(!nanoClient.connectedToServer())
                            {
                                await nanoClient.connect();
                            }
                            var returnString = await executeNanoTerminal(nanoClient,newLine);
                            console.log("got back" + returnString);
                            
                            resolve(returnString);
                        });
                    });
                xtermManger.changeKeyEventLock(true);

                xtermManger.write("\r\nConnecting");

                var loadingAnimationFunc = ()=>{
                    xtermManger.write(".");
                    setTimeout(()=>{
                        if(!nanoClient.connectedToServer())
                        {
                            loadingAnimationFunc();
                        }
                    },200);
                };
                
                loadingAnimationFunc();



                nanoClient.connect().then(function(){
                    xtermManger.changeKeyEventLock(false);
                    xtermManger.write("\r\n");
                    xtermManger.prompt();
                });

            },
                500);
        }
        timeThrough++;
    });
    return (
        <div id="xtermContainer" ref={container} />
    );

};



export default XtermJS;
