import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Provider } from "react-redux";
import store from "./store/index";
import * as log from 'loglevel';
import debug from 'debug'

//debug.enable('NCIndexInfo*,NCIndexError*,bittorrent-tracker:websocket-tracker*,simple-peer*,bittorrent-tracker:websocket-tracker*,bittorrent-tracker:client*')
//log.setDefaultLevel("trace")
debug.disable();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

defineCustomElements(window);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
