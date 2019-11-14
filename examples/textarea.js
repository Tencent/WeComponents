export default {
    TEXTAREA_BASIC: {
        component: 'textarea',
        attributes: {
            placeholder: '请在此输入...'
        }
    },
    TEXTAREA_WITH_LABEL: {
        component: 'textarea',
        label: '标题',
        validity: {
            required: true
        }
    },
    TEXTAREA_WITH_MAXLENGTH: {
        component: 'textarea',
        validity: {
            max: 50
        }
    }
};
