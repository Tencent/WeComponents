export default {
    RADIO_BASIC: {
        component: 'radio',
        value: 1,
        items: [
            {
                label: '咸粽子',
                value: 0
            },
            {
                label: '甜粽子',
                value: 1
            }
        ]
    },
    RADIO_WITH_LABEL: {
        component: 'radio',
        label: '字段标题',
        value: 0,
        validity: {
            required: true
        },
        items: [
            {
                label: '咸粽子',
                value: 0
            },
            {
                label: '甜粽子',
                value: 1
            }
        ]
    },
    RADIO_WITH_SINGLE_DISABLED: {
        component: 'radio',
        label: '字段标题',
        value: 0,
        items: [
            {
                label: '咸粽子',
                value: 0,
                attributes: {
                    disabled: true
                }
            },
            {
                label: '甜粽子',
                value: 1
            }
        ]
    },
    RADIO_WIDTH_DISABLED: {
        component: 'radio',
        label: '字段标题',
        value: 1,
        attributes: {
            disabled: true
        },
        items: [
            {
                label: '咸粽子',
                value: 0
            },
            {
                label: '甜粽子',
                value: 1
            }
        ]
    }
};
