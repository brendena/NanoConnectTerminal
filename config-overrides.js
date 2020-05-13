
const webpack = require('webpack');
const path = require('path');


module.exports = function override(config, env) {
    console.log(require.resolve('browserfs'))
    config.resolve.alias['fs'] = 'browserfs/dist/shims/fs.js';
    config.resolve.alias['buffer'] = 'browserfs/dist/shims/buffer.js';
    config.resolve.alias['path'] = 'browserfs/dist/shims/path.js';
    config.resolve.alias['processGlobal'] = 'browserfs/dist/shims/process.js';
    config.resolve.alias['bufferGlobal'] = 'browserfs/dist/shims/bufferGlobal.js';
    config.resolve.alias['bfsGlobal'] = require.resolve('browserfs');


    config.plugins.push(new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' }))
    config.node.process = false;
    config.node.Buffer = false;
    //config.module.noParse =  /browserfs\.js/

    return config;
}