import Basic from './basic.js';
// 具体页面实现, 以class实现后，最终会导出为一个Vue单文件组件
class buttonBlock extends Basic {
    // pageConfig = [
    // {
    //     component: 'button',
    //     id: 'button',
    //     label: 'testButton',
    //     attributes: {
    //         clickEventName: 'buttonClickHandler'
    //     }
    // }
    // ];

    constructor(config) {
        // 构造函数需要将当前js文件转为Vue单文件组件对象导出
        super();
        this.pageConfig = config;
    }

    mounted() {
        super.container.setAttribute('button', 'label', 'changed');
    }

    buttonClickHandler(event) { }
}

export default buttonBlock;
