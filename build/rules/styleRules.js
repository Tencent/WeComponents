const path = require('path');
const merge = require('lodash.merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(config) {
    const configWebpack = config.webpack;
    const isProduction = config.env === 'production';

    let includePaths = [
        path.resolve('node_modules'),
        config.webpack.path.src,
        // configWebpack.path.component,
        path.resolve(process.cwd(), './src'),
        path.join(configWebpack.path.src, 'css/sprites')
    ];

    // 样式loader
    const commonLoaders = [
        {
            loader: 'cache-loader',
            options: {
                // provide a cache directory where cache items should be stored
                cacheDirectory: path.resolve('.cache')
            }
        },
        {
            loader: 'css-loader',
            options: {
                localIdentName: '[name]-[local]-[hash:base64:5]',
                module: config.webpack.cssModule,
                autoprefixer: true,
                minimize: true,
                sourceMap: configWebpack.cssSourceMap,
                // includePaths: includePaths,
                importLoaders: 2
            }
        },
        {
            loader: 'postcss-loader'
        }
    ];

    if (isProduction) {
        commonLoaders.splice(0, 0, { loader: MiniCssExtractPlugin.loader });
    } else {
        commonLoaders.splice(0, 0, { loader: 'vue-style-loader' });
    }

    const styleRules = {
        css: {
            test: /\.css$/,
            use: commonLoaders,
            include: includePaths
        },
        less: {
            test: /\.less$/,
            use: merge([], commonLoaders).concat([
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: configWebpack.cssSourceMap
                        // paths: includePaths
                    }
                }
            ]),
            include: includePaths
        },
        stylus: {
            test: /\.styl$/,
            use: merge([], commonLoaders).concat([
                {
                    loader: 'stylus-loader'
                }
            ]),
            include: includePaths
        },
        sass: {
            test: /\.s(a|c)ss$/,
            use: merge([], commonLoaders).concat([
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: configWebpack.cssSourceMap
                    }
                }
            ]),
            include: includePaths
        }
    };

    // vue-loader的样式loader配置
    let vueLoader = {
        test: /\.vue$/,
        loader: 'vue-loader'
        // include: [configWebpack.path.src]
        // exclude: /node_modules/
    };

    let rules = [];

    configWebpack.style.forEach(styleParam => {
        let style = styleParam === 'scss' ? 'sass' : styleParam;
        let rule = styleRules[style] || '';
        rule && rules.push(rule);
    });

    rules.unshift(vueLoader);

    return rules;
};
