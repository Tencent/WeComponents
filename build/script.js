process.env.NODE_ENV = 'production'; // 先强制script入口的NODE_ENV为production
const webpack = require('webpack');
const feature = require('./feature/feature');
const util = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

if (feature.installDependency()) {
    return;
}

// 自动更新基础库
util.updateLibs();

if (!isProduction) {
    require('./server');
} else if (isProduction) {
    compilerRun(require('./webpack.base'));
}

function compilerRun(config) {
    let compiler = webpack(config);

    compiler.run(function(err, stats) {
        if (!err) {
            console.log(
                stats.toString({
                    assets: false,
                    cached: false,
                    colors: true,
                    children: false,
                    errors: true,
                    warnings: true,
                    version: true,
                    modules: false,
                    publicPath: true
                })
            );
        } else {
            console.log(err);
        }
    });
}
