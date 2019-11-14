const path = require('path');

const Clean = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin-hash');
const WriteFilePlugin = require('write-file-webpack-plugin');
const FileWebpackPlugin = require('file-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = function (config, webpack) {
    let configWebpack = config.webpack;
    let isProduction = config.env === 'production';

    let plugins = [
        new VueLoaderPlugin(),
        new HappyPack({
            id: '1',
            verbose: false,
            loaders: [
                {
                    path: 'babel-loader',
                    options: {
                        cacheDirectory: './.cache/'
                    }
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: `css/${config.webpack.contenthashName}.css`,
            chunkFilename: `css/${config.webpack.cssChunkHashName}.css`
        })
    ];

    if (isProduction) {
        let useCdn = configWebpack.useCdn || true;

        if (useCdn) {
            plugins.push(
                new FileWebpackPlugin({
                    'after-emit': [
                        {
                            from: path.join(configWebpack.path.dist, '**/*'),
                            to: path.join(configWebpack.path.dist, configWebpack.path.distCdn),
                            action: 'move',
                            options: {
                                cwd: configWebpack.path.dist,
                                absolute: true,
                                ignore: ['*.html', '**/*.html']
                            }
                        },
                        {
                            from: path.join(configWebpack.path.dist, '*.html'),
                            to: path.join(configWebpack.path.dist, configWebpack.path.distWebserver),
                            action: 'move',
                            options: {
                                cwd: configWebpack.path.dist,
                                absolute: true
                            }
                        }
                    ]
                })
            );
        }
    } else {
        if (configWebpack.showSource) {
            plugins.push(new WriteFilePlugin());
        }
    }

    if (configWebpack.clean) {
        plugins.push(
            new Clean([isProduction ? configWebpack.path.dist : configWebpack.path.dev], { root: path.resolve() })
        );
    }

    if (config.webpack.promise) {
        plugins.push(
            new webpack.ProvidePlugin({
                Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise'
            })
        );
    }

    configWebpack.static.forEach(item => {
        plugins.push(
            new CopyWebpackPlugin([
                {
                    from: item.src,
                    to:
                        (item.dist || item.src) +
                        (item.hash ? '[path]' + configWebpack.hashName : '[path][name]') +
                        '.[ext]'
                }
            ])
        );
    });

    config.webpack.html.forEach(function (page, key) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: `${page.key}.html`,
                template: page.path,
                chunks: ['vendors', 'async_vendors', 'runtime', `${page.key}`],
                favicon: path.join(configWebpack.path.src, 'favicon.ico'),
                inject: true,
                minify: isProduction
                    ? {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true
                    }
                    : false,
                chunksSortMode: 'dependency'
            })
        );
    });

    return plugins;
};
