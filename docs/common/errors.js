/**
 * 后台常用错误码定义
 * @todo 生成？
 */

// ~/QQMail/mmgamecenter/src/svrkit/mmgamemanagedbmq/mmgamemanagedbmqdefine.h

// HTTP status error
const status = {
    400: '请求格式错误',
    401: '登录态失效',
    403: '无提交权限，如有问题请联系微信游戏助手',
    500: '服务器错误，请稍后再来',
    503: '服务器繁忙，请稍后再来'
};

// required, copy from c++ defined
const code = {
    FIEL_SIZE_EMPTY: 256,
    MYSQL_ERROR_1062: 1062
};

// optional, user friendly tips
const message = {
    FIEL_SIZE_EMPTY: '上传文件不可为空',
    MYSQL_ERROR_1062: '此记录已存在，请重新填写'
};

// @todo 对不同返回码的处理行为

// 将返回码的数字到宏变量名的反转，便于对无中文解释的情况下了解错误原因
let nameMapping = {};
let init = () => {
    Object.keys(code).forEach(name => {
        nameMapping[code[name]] = name;
    });
};
init();

export default {
    status,
    code,
    message,

    getMessage(code) {
        let message = [],
            codeName = nameMapping[code];

        // 默认展示：前端提示语 （宏变量名）
        // 未定义前端提示语：（宏变量名）
        // 什么都没定义：原始数字返回码
        if (codeName) {
            message.push(this.message[codeName] || codeName);
        } else {
            message.push(code);
        }

        return message.join(' ');
    }
};
