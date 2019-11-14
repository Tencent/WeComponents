var vueDocs = require('vue-docgen-api');
var rd = require('rd');
var fs = require('fs');

var componentInfo = [];

rd.eachFileFilterSync('./src/components', /\.vue$/, function (f, s) {
    componentInfo.push(vueDocs.parse(f));
});

let content = 'module.exports = ' + JSON.stringify(componentInfo, undefined, 4);

fs.writeFileSync('./docs/components.js', content);
