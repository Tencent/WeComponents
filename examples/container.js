export default {
    CONTAINER_BASIC: {
        component: 'container',
        items: [
            {
                component: 'input',
                label: 'input'
            },
            {
                component: 'select',
                label: 'select'
            }
        ]
    },
    CONTAINER_WITH_LABEL: {
        component: 'container',
        label: '容器标题',
        items: [
            {
                component: 'input',
                label: 'input'
            },
            {
                component: 'select',
                label: 'select'
            }
        ]
    },
    CONTAINER_WITH_OPTION: {
        component: 'container',
        label: '容器标题',
        attributes: {
            disabled: false,
            copyable: true,
            collapse: true, // 容器可展开收起
            deletable: true // 容器可整体删除
        },
        items: [
            {
                component: 'input',
                label: 'input'
            },
            {
                component: 'select',
                label: 'select'
            }
        ]
    },
    CONTAINER_WITH_LAYOUT: {
        component: 'container',
        label: '容器标题',
        attributes: {
            flexJustify: 'space-around'
        },
        items: [
            {
                component: 'input',
                label: 'input'
            },
            {
                component: 'select',
                label: 'select'
            }
        ]
    }
};
