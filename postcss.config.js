/**
 * PostCSS 相关配置和处理
 */
const config = require('./config/project');
const PostcssImport = require('postcss-import');
const Autoprefixer = require('autoprefixer');
const PostcssAsset = require('postcss-assets');

module.exports = {
    plugins: [
        PostcssImport({
            path: [config.webpack.path.src]
        }),
        Autoprefixer({
            browsers: ['iOS 7', '> 0.1%', 'android 2.1']
        }),
        PostcssAsset({
            loadPaths: [config.webpack.path.src]
        })
    ]
};
