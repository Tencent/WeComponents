const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const __basename = path.dirname(__dirname);

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__basename, '/src/index.js')
    },
    output: {
        path: path.join(__basename, '/lib'),
        publicPath: '/lib/',
        filename: 'wecomponents.esm.js',
        libraryTarget: 'umd'
    },
    externals: Object.keys(require('../package.json').dependencies).concat([/^echarts/, /^v-charts/, /^vue-awesome/]),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader?minimize', 'less-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};
