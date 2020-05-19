import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import XtermManager from '../objects/XtermManager'
import yargsBrowser from 'yargs_browser/dist/index'
import TextArtDrawer from '../objects/TextArtDrawer'


import '../../node_modules/xterm/css/xterm.css';
import './XtermJS.css';

var BrowserFS = require("browserfs")
var fs = BrowserFS.BFSRequire('fs');
BrowserFS.configure({ fs: "LocalStorage" }, function (e) {
    console.log(e);
    console.log("e is nothing ")
});

var yargs = require('yargs')
var NanoConnectClient = require('nanoconnect/clientMessagesIndex')
var executeNanoTerminal = require('nanoconnect/clientTerminal')

var nanoClient = new NanoConnectClient(
                        //"magnet:?xt=urn:btih:dd59ca795c689b00713f9f2bb15379b32bb13cbc&dn=DataSheBlow.png&tr=ws://localhost:8000",
                        "magnet:?xt=urn:btih:dd59ca795c689b00713f9f2bb15379b32bb13cbc&dn=DataSheBlow.png&tr=wss%3A%2F%2Ftracker.btorrent.xyz",
                        {port:6881});
nanoClient.connect();

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

            setTimeout(async function () {
                
                
                                                                                        //4a90e2 - nano logo
                                                                                         //\x1B[1;3;38;2;0;0;255m - just blue
                                                                                         //38;2;r;g;b
                var xtermManger = new XtermManager(container.current,'\x1B[1;3;38;2;144;169;226mNanoConnect@root\x1B[0m:/ ',

                    async (newLine: string) => {
                       
                        return  new  Promise(async (resolve, reject) => {
                            
                            try{
                                if(!nanoClient.connectedToServer())
                                {
                                    await nanoClient.waitForConnection();
                                }
                                var returnString = await executeNanoTerminal(nanoClient,newLine);
                                console.log("got back" + returnString);
                                
                                resolve(returnString);
                            }
                            catch(err){
                                reject(err)
                            }

                        });
                    });
                xtermManger.changeKeyEventLock(true);


                var artDrawer =  new TextArtDrawer((text)=>{xtermManger.write(text)});
                await artDrawer.draw();


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



                nanoClient.waitForConnection().then(function(){
                    xtermManger.changeKeyEventLock(false);
                    xtermManger.write("\r\n");
                    xtermManger.write("copy (ctrl + c) paste (ctrl + p) \r\n");
                    xtermManger.write("type - help (for list of commands)\r\n");
                    xtermManger.write("type - getting_started (if your new to NANO) \r\n");
                    xtermManger.write("type - [command] help  (for more information)\r\n");
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
