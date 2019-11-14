const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = function (config, webpack) {

    const configWebpack = config.webpack;

    let plugins = [];

    configWebpack.sprites = (configWebpack.spriteMode === 'none') ? [] : configWebpack.sprites;

    configWebpack.sprites.forEach(function (sprites) {
        let style = configWebpack.spriteStyle,
            extMap = {
                css: 'css',
                stylus: 'styl',
                less: 'less',
                sass: 'sass',
                scss: 'scss'
            },
            spriteMode = (~sprites.key.indexOf('_retina')) ? 'retinaonly' : configWebpack.spriteMode,
            retinaTplMap = {
                retinaonly: '_retinaonly',
                'normal': '',
                'retina': '_retina'
            },
            retinaTpl = retinaTplMap[spriteMode] || '';

        let spritesConfig = {
            src: {
                cwd: sprites.path,
                glob: '*.png'
            },
            target: {
                image: path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.png'),
                css: [
                    [
                        path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.' + extMap[style]),
                        {
                            format: `${sprites.key}${retinaTpl}`
                        }
                    ],
                    [
                        path.join(configWebpack.path.src, 'css/sprites/' + sprites.key + '.full.css'),
                        {
                            format: `${sprites.key}${retinaTpl}-full`
                        }
                    ],
                ]
            },
            spritesmithOptions: {
                padding: 2
            },
            apiOptions: {
                cssImageRef: '~' + sprites.key + '.png',
                handlebarsHelpers: {
                    'half': function (val) {
                        return (val.replace('px', '') / 2) + 'px';
                    }
                }
            }
        };

        let templatePath = require.resolve(
            'spritesheet-templates-steamer/lib/templates/' + style + retinaTpl + '.template.handlebars'
        );
        // 引入所有的合图样式模板
        let templateFullPath = require.resolve(
            `spritesheet-templates-steamer/lib/templates/full${retinaTpl}.template.handlebars`
        );

        spritesConfig.customTemplates = {
            [`${sprites.key}${retinaTpl}`]: templatePath,
            [`${sprites.key}${retinaTpl}-full`]: templateFullPath
        };

        if (spriteMode === 'retina') {
            spritesConfig.retina = '@2x';
            spritesConfig.target.css[0].push({
                format: `${sprites.key}`
            });
        }
        else {
            spritesConfig.target.css[0].push({
                format: `${sprites.key}${retinaTpl}`
            });
        }

        plugins.push(new SpritesmithPlugin(spritesConfig));
    });

    return plugins;
};
