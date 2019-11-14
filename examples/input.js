export default {
    INPUT_BASIC: {
        component: 'input'
    },
    INPUT_WITH_LABEL: {
        component: 'input',
        label: '标题'
    },
    INPUT_WITH_REQUIRED: {
        component: 'input',
        validity: {
            required: true
        }
    },
    INPUT_WITH_MAXLENGTH: {
        component: 'input',
        validity: {
            maxLength: 10
        }
    }
};
