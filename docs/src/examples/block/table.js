import WeComponents from '../../../../src';

// 用户使用class语法、纯JS书写页面逻辑
class userCode {
    constructor() {
        this.config = [
            {
                component: 'button',
                id: 'button',
                label: 'testButton',
                attributes: {
                    clickEventName: 'buttonClickHandler'
                }
            }
        ];
    }

    mounted() {
        this.container.setAttribute('button', 'label', 'changed');
    }

    buttonClickHandler(event) {
        console.log('button click: ', event);
    }
}
// class userCode extends Page {
//     config = [
//         {
//             component: 'button',
//             id: 'button',
//             label: 'testButton',
//             attributes: {
//                 clickEventName: 'buttonClickHandler'
//             }
//         }
//     ];

//     mounted() {
//         this.container.setAttribute('button', 'label', 'changed');
//     }

//     buttonClickHandler(event) {
//         console.log('button click: ', event);
//     }
// }

// 引入组件提供的公共函数，将userCode转化为Vue组件
let cls = {
    formatUserCode(code) {
        let config = code.config;

        return {
            data() {
                return {
                    container: new WeComponents(this, config)
                };
            }
        };
    }
};

// 将转化后的Vue组件导出
export default cls.formatUserCode(new userCode());
