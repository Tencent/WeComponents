const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const packageConfig = require('../../package.json');
const spawnSync = require('child_process').spawnSync;
const steamerConfig = require('../../config/steamer.config');

module.exports = {
    /**
     * get html files automatically
     * @param {Object} options
     *        - {String}  srcPath [directory contains html files]
     *        - {Integer} level   [0 => current level, 1 => next level]
     * @return {Array}          [array of html files path]
     */
    getHtmlEntry: function(options) {
        let opt = options || {};

        let level = opt.level || 0,
            srcPath = opt.srcPath || '',
            keyType = opt.keyType || 'folderName';

        if (!fs.existsSync(srcPath)) {
            return [];
        }

        // read html filename from
        let srcFiles = fs.readdirSync(srcPath),
            htmlFiles = [];

        if (level) {
            srcFiles.forEach(item => {
                let folder = path.join(srcPath, item);
                if (fs.lstatSync(folder).isDirectory()) {
                    let subSrcFiles = fs.readdirSync(folder);
                    htmlFiles = htmlFiles.concat(getFromSrc(subSrcFiles, item));
                }
            });
        } else {
            htmlFiles = htmlFiles.concat(getFromSrc(srcFiles));
        }

        function getFromSrc(srcFiles, folderPath) {
            let folder = folderPath || '';
            let htmlFiles = [];

            srcFiles
                .filter(item => item.indexOf('.html') !== -1)
                .forEach(item => {
                    let obj = {};

                    if (keyType === 'fileName') {
                        obj.key = item.replace('.html', '');
                    } else {
                        obj.key = folder || item.replace('.html', '');
                    }

                    obj.path = path.join(srcPath, folder, item);

                    htmlFiles.push(obj);
                });

            return htmlFiles;
        }

        return htmlFiles;
    },

    /**
     * get sprite folder, only depth 1st folder matter
     * @param {Object} options
     *        - {String} srcPath [sprite image parent folder]
     * @return {Array}             [sprite folder]
     */
    getSpriteEntry: function(options) {
        let opt = options || {};

        let srcPath = opt.srcPath || '';

        if (!fs.existsSync(srcPath)) {
            return [];
        }

        let srcFiles = fs.readdirSync(srcPath),
            spriteFiles = [];

        srcFiles = srcFiles.filter(item => {
            return item.indexOf('.') !== -1;
        });

        srcFiles.forEach(item => {
            let obj = {};
            obj.key = item;
            obj.path = path.join(srcPath, item);
            spriteFiles.push(obj);
        });

        return spriteFiles;
    },

    /**
     * get js files automatically
     * @param {Object} options
     *        - {String} srcPath [directory contains js files]
     *        - {String} fileName    [entry js filename]
     *        - {Array} extensions   [possiable js extension]
     *        - {String} keyPrefix  [prefix of key]
     *        - {Integer} level   [0 => current level, 1 => next level]
     * @return {Object}             [Object of js files path]
     */
    getJsEntry: function(options) {
        let opt = options || {};

        let srcPath = opt.srcPath || '',
            fileName = opt.fileName || 'main',
            extensions = opt.extensions || ['js'],
            keyPrefix = opt.keyPrefix || '',
            level = opt.level || 0;

        let jsFileArray = {};

        if (!fs.existsSync(srcPath)) {
            return jsFileArray;
        }

        // read js filename
        let srcFiles = fs.readdirSync(srcPath);

        if (level) {
            srcFiles.filter(item => {
                let folder = path.join(srcPath, item);
                return fs.lstatSync(folder).isDirectory();
            });

            srcFiles.forEach(item => {
                extensions.forEach(ext => {
                    let jsPath = path.join(srcPath, item, fileName + '.' + ext);

                    if (fs.existsSync(jsPath) && !jsFileArray[keyPrefix + item]) {
                        jsFileArray[keyPrefix + item] = [jsPath];
                    }
                });
            });
        } else {
            extensions.forEach(ext => {
                let jsPath = path.join(srcPath, fileName + '.' + ext);
                if (fs.existsSync(jsPath)) {
                    jsFileArray[keyPrefix + fileName] = [jsPath];
                }
            });
        }

        return jsFileArray;
    },

    /**
     * print error message
     * @param  {String} str [message]
     * @return {String}     [msg]
     */
    error: function(str) {
        this.log(str, 'red');
    },

    /**
     * print information
     * @param  {String} str [message]
     * @return {String}     [msg]
     */
    info: function(str) {
        this.log(str, 'cyan');
    },

    /**
     * print warning message
     * @param  {String} str [message]
     * @return {String}     [msg]
     */
    warn: function(str) {
        this.log(str, 'yellow');
    },

    /**
     * print success message
     * @param  {String} str [message]
     * @return {String}     [msg]
     */
    success: function(str) {
        this.log(str, 'green');
    },

    _isType: function(type, obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    },

    /**
     * pring message
     * @param  {String} str   [message]
     * @param  {String} color [color name]
     * @return {String}       [message with color]
     */
    log: function(str = '', color) {
        let msg = chalk[color](this._isType('Object', str) ? JSON.stringify(str) : str);
        console.log(msg);
        return msg;
    },

    createNotifierCallback: function() {
        const notifier = require('node-notifier');

        return (severity, errors) => {
            if (severity !== 'error') return;

            const error = errors[0];
            const filename = error.file && error.file.split('!').pop();

            notifier.notify({
                title: packageConfig.name,
                message: severity + ': ' + error.name,
                subtitle: filename || ''
            });
        };
    },

    updateLibs: function() {
        if (steamerConfig['auto-update-components-lib'] && steamerConfig['auto-update-components-lib'].length > 0) {
            spawnSync('tnpm', ['update'].concat(steamerConfig['auto-update-components-lib']), {
                cwd: path.resolve(__dirname, '../../'),
                stdio: 'ignore',
                shell: true
            });
        }
    }
};
