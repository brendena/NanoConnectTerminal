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

var yargs =  require('yargs')
/*
var yargs =  require('yargs')
var BrowserFS = require("browserfs")
var fs = BrowserFS.BFSRequire('fs');
BrowserFS.configure({ fs: "LocalStorage" }, function (e) {
  console.log(e);
  console.log("e is nothing")
});
*/

//https://medium.com/codingtown/xterm-js-terminal-2b19ccd2a52
//light wrapper for xterm
//https://github.com/nodebotanist/xterm-browser-terminal-framework

var timeThrough = 0;
const XtermJS: React.FC = () => {

    const container = useRef();
  
    useEffect(() => {
        // Every time the component has been re-rendered,
        // the counter is incremented
        console.log("---------------")
        if(timeThrough == 1)
        {
            console.log('adding manager')
            
            setTimeout(function(){ 
                var xtermManger = new XtermManager(container.current,(newLine:string)=>{
                    console.log(newLine);
                    //*
                    var argv = yargs.locale("en")
                    
                    .command("test","asdfasdf",()=>{
                        console.log("test");
                    }).help().
                    parse(['help'],(_err, argv, output)=>{
                        console.log(output);
                    });
                    //*/
                });
            }, 
            500);
        }
        timeThrough++;
    }); 
    return ( 
        <div id="xtermContainer" ref={container}/>
    );
    
};



export default XtermJS;
