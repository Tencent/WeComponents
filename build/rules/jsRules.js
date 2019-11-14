module.exports = function(config) {
    const configWebpack = config.webpack;

    // js方言
    const jsRules = {};

    let rules = [
        {
            test: /\.js$/,
            loader: 'happypack/loader?id=1',
            exclude: /node_modules/
        }
    ];

    configWebpack.js.forEach(tpl => {
        let rule = jsRules[tpl] || '';
        rule && rules.push(rule);
    });

    return rules;
};
