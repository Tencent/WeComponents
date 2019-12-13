<script>
import componentInfoList from '../components.js';
export default {
    methods: {
        parse(currentComponentName) {
            let currentComponentInfo;
            componentInfoList.some(componentInfo => {
                if (componentInfo.displayName === currentComponentName) {
                    currentComponentInfo = componentInfo;
                    return true;
                }
            });

            if (currentComponentInfo) {
                let { props, events, methods, slots } = currentComponentInfo;
                // 生成props列表
                let propsTableValue = [],
                    eventsTableValue = [],
                    methodsTableValue = [],
                    slotsTableValue = [];

                if (Object.keys(props).length > 0) {
                    Object.keys(props).forEach(_key => {
                        let _value = props[_key],
                            _ignore = false;
                        // 处理tags
                        if (
                            Object.prototype.toString.call(_value.tags) === '[object Object]' &&
                            Object.keys(_value.tags).length > 0
                        ) {
                            Object.keys(_value.tags).some(_tagKey => {
                                if (
                                    _tagKey === 'ignore' &&
                                    Array.isArray(_value.tags[_tagKey]) &&
                                    _value.tags[_tagKey].length > 0 &&
                                    _value.tags[_tagKey][0].description
                                ) {
                                    _ignore = true;
                                    return true;
                                }
                            });
                        }

                        let _description = _value.description,
                            _tableRowName = _key,
                            _tableRowDescription = _value.description;

                        if (Array.isArray(_value.tags.property)) {
                            _value.tags.property.some(_property => {
                                if (_property.title === 'property') {
                                    _tableRowName = `${_property.name}.${_key}`;
                                }
                            });
                        }

                        if (_key === 'wraperClass') {
                            _tableRowName = 'attributes.class';
                        }

                        if (!_ignore) {
                            let tableRow = {
                                name: _tableRowName,
                                description: _tableRowDescription || '-',
                                type: (_value.type || {}).name,
                                default: (_value.defaultValue || {}).value || '-',
                                required: _value.required ? '是' : '-'
                            };
                            propsTableValue.push(tableRow);
                        }
                    });
                }

                // 生成events列表及methods列表
                if (Array.isArray(methods) && methods.length > 0) {
                    methods.forEach(_method => {
                        let _description = _method.description,
                            isEvent = false,
                            _methodParams = _method.params,
                            _paramsDescription = '';

                        if (_description.indexOf('<event>') > -1) {
                            isEvent = true;
                        }

                        if (!isEvent) {
                            if (Array.isArray(_methodParams) && _methodParams.length > 0) {
                                _methodParams.forEach(_methodParam => {
                                    _paramsDescription += `${(_methodParam || {}).name}{ ${(_methodParam.type || {})
                                        .name || '-'} }: ${_methodParam.description};\n`;
                                });
                            }
                        }

                        let tableRow = {
                            name: _method.name,
                            description: _method.description || '-',
                            params: _paramsDescription
                        };

                        if (isEvent) {
                            let eventBegin = _description.indexOf('<event>'),
                                eventEnd = _description.indexOf('</event>'),
                                customParamBegin = _description.indexOf('<customParam>'),
                                customParamEnd = _description.indexOf('</customParam>');

                            tableRow.name = _description.slice(eventBegin + '<event>'.length, eventEnd);
                            tableRow.description = _description.slice(0, eventBegin);
                            tableRow.params = _description.slice(
                                customParamBegin + '<customParam>'.length,
                                customParamEnd - '<customParam>'.length + 1
                            );
                            eventsTableValue.push(tableRow);
                        } else {
                            methodsTableValue.push(tableRow);
                        }
                    });
                }

                // 生成slots列表
                if (Object.keys(slots).length > 0) {
                    Object.keys(slots).forEach(_key => {
                        let tableRow = {
                            name: _key,
                            description: slots[_key].description || '-'
                        };
                        slotsTableValue.push(tableRow);
                    });
                }

                let tables = ['propsTable', 'eventsTable', 'methodsTable', 'slotsTable'];

                [propsTableValue, eventsTableValue, methodsTableValue, slotsTableValue].forEach((tableValue, index) => {
                    if (tableValue.length > 0) {
                        this.page.mergeAttributes(tables[index], {
                            attributes: {
                                hide: false
                            },
                            value: tableValue
                        });
                    }
                });
            }
        }
    }
};
</script>
