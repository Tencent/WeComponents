process.env.NODE_ENV = 'production'; // 先强制script入口的NODE_ENV为production
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    require('./server');
} else if (isProduction) {
    compilerRun(require('./webpack.release'));
}

function compilerRun(config) {
    let compiler = webpack(config);

    compiler.run(function(err, stats) {
        if (!err) {
            console.log(
                stats.toString({
                    assets: true,
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
