export default {
    BUTTON_BASIC: {
        component: 'button'
    },
    BUTTON_WITH_LABEL: {
        component: 'button',
        label: '标题'
    },
    BUTTON_WITH_TYPE: {
        component: 'button',
        attributes: {
            buttonType: 'primary'
        }
    },
    BUTTON_LOADING: {
        component: 'button',
        attributes: {
            loading: true
        }
    },
    BUTTON_WITH_THROTTLE: {
        component: 'button',
        label: '点击后3秒内禁止点击',
        attributes: {
            throttleTime: 3000
        }
    }
};
