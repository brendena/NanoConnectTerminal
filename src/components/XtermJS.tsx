import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import XtermManager from '../objects/XtermManager'

import '../../node_modules/xterm/css/xterm.css';
import './XtermJS.css';


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
                var xtermManger = new XtermManager(container.current);
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
