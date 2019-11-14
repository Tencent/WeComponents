const portfinder = require('portfinder');
const utils = require('./utils');
const webpackConfig = require('./webpack.base.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// 自动更新基础库
// utils.updateLibs();

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || webpackConfig.devServer.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            webpackConfig.devServer.port = port;
            // Add FriendlyErrorsPlugin
            webpackConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: [`Your application is running here: http://${webpackConfig.devServer.host}:${port}`]
                    },
                    onErrors: utils.createNotifierCallback()
                })
            );

            // 支持 webpackChunkName 的分模块打包以便按需加载
            webpackConfig.output['chunkFilename'] = 'js/[name].js';
            resolve(webpackConfig);
        }
    });
});
