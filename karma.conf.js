/**
 * Karma 单元测试配置
 */
let webpackConfig = require('./build/webpack.base.js');

module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],

        // 单元测试文件路径
        files: ['tests/**/*.spec.js'],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec', 'coverage'],

        browsers: ['ChromeHeadless'],

        // 测试报告输出路径
        coverageReporter: {
            dir: './coverage',
            reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
        }
    });
};
