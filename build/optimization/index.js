module.exports = function (config, webpack) {
    let optimization = {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                default: false,
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendors'
                },
                'async_vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    chunks: 'async',
                    name: 'async_vendors'
                }
            }
        },
        runtimeChunk: { name: 'runtime' }
    };

    return config.webpack.splitChunksEnabled === false ? undefined : optimization;
};
