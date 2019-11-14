export default {
    PROCESSOR_BASIC: {
        component: 'processor',
        value: 0,
        items: [
            {
                label: '烧开热水',
                value: 0
            },
            {
                label: '切好葱姜蒜',
                value: 1
            },
            {
                label: '准备好鸡肉',
                value: 2
            },
            {
                label: '放弃做菜，把热水倒进泡面里',
                value: 3
            },
            {
                label: '晚饭完成',
                value: 4
            }
        ]
    },
    PROCESSOR_WITH_LABEL: {
        component: 'processor',
        label: '做晚饭教程',
        value: 0,
        validity: {
            required: true
        },
        items: [
            {
                label: '烧开热水',
                value: 0
            },
            {
                label: '切好葱姜蒜',
                value: 1
            },
            {
                label: '准备好鸡肉',
                value: 2
            },
            {
                label: '放弃做菜，把热水倒进泡面里',
                value: 3
            },
            {
                label: '晚饭完成',
                value: 4
            }
        ]
    },
    PROCESSOR_WITH_DISABLED: {
        component: 'processor',
        value: 1,
        attributes: {
            disabled: true
        },
        items: [
            {
                label: '烧开热水',
                value: 0
            },
            {
                label: '切好葱姜蒜',
                value: 1
            },
            {
                label: '准备好鸡肉',
                value: 2
            },
            {
                label: '放弃做菜，把热水倒进泡面里',
                value: 3
            },
            {
                label: '晚饭完成',
                value: 4
            }
        ]
    }
};
