/**
 * Qstruct，兼具数组和对象的优点：传入数组配置，以对象方式快速访问
 * 将多层级的fields配置扁平化为 fieldName -> fieldConfig 配置
 * 支持无限层级，子级的key可以通过itemsKey 指定, fieldName.a.b -> [index1, index2, index3] -> fieldConfig
 */
class Qstruct {
    constructor(data, key = 'name', itemsKey = 'items') {
        this.data = data;
        this._indexMapping = {};
        this.key = key;
        this.itemsKey = itemsKey;

        this.set(data);
    }

    set(data, parentItem) {
        const key = this.key;

        if (!Array.isArray(data)) {
            return false;
        }

        // 遍历页面config定义的数组，形成"a.b.c"的扁平结构
        data.forEach((item, index) => {
            if (item[key]) {
                let indexKey = item[key],
                    indexValue;

                if (parentItem) {
                    let parentIndex,
                        parentKey = parentItem.__parentKey__ || parentItem[key];

                    parentIndex = this._indexMapping[parentKey];
                    indexKey = parentKey + '.' + indexKey;

                    this._indexMapping[indexKey] = parentIndex ? parentIndex.concat([index]) : [];

                    // 侵入一个值，保存父级路径
                    item.__parentKey__ = indexKey;
                } else {
                    indexValue = [index];
                }

                // 对于repeated的组件，仅记录第一个
                !this._indexMapping[indexKey] && (this._indexMapping[indexKey] = indexValue);
            }

            item[this.itemsKey] && this.set(item[this.itemsKey], item);
        });
    }

    /**
     * get('a.b.c')
     * @param {*} name
     */
    get(name) {
        let result;

        if (typeof this._indexMapping[name] !== 'undefined') {
            let indexList = this._indexMapping[name];

            if (indexList && indexList.length > 0) {
                result = {};
                result[this.itemsKey] = this.data;
                indexList.forEach(index => {
                    result = result[this.itemsKey][index];
                });
            }
        }

        return result;
    }

    getKeys() {
        return Object.keys(this._indexMapping);
    }

    /**
     *
     * @param {*} name
     * @return array
     */
    getIndex(name) {
        return this._indexMapping[name];
    }
}

export default Qstruct;
