var vueDocs = require('vue-docgen-api');
var rd = require('rd');
var fs = require('fs');

var componentInfo = [];

function deepFilter(obj, filterProperties = []) {
    if (obj == null || 'object' !== typeof obj) return obj;
    let copy = obj.constructor();

    for (let attr in obj) {
        if (filterProperties.findIndex(property => property === attr) === -1 && obj.hasOwnProperty(attr)) {
            copy[attr] = deepFilter(obj[attr], filterProperties);
        }
    }

    return copy;
}

rd.eachFileFilterSync('./src/components', /\.vue$/, function (f, s) {
    let info = deepFilter(vueDocs.parse(f), ['path']);
    componentInfo.push(info);
});

let content = 'module.exports = ' + JSON.stringify(componentInfo, undefined, 4);

fs.writeFileSync('./docs/components.js', content);
