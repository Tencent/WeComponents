export default {
    SELECT_BASIC: {
        component: 'select',
        value: 3,
        items: [
            {
                label: 'TypeScript',
                value: 0
            },
            {
                label: 'Java',
                value: 1
            },
            {
                label: 'Python',
                value: 2
            },
            {
                label: 'Dart',
                value: 3
            },
            {
                label: 'Go',
                value: 4
            }
        ]
    },
    SELECT_WITH_CUSTOM_EVENT: {
        component: 'select',
        items: [
            {
                label: '设置item.customEventName启用',
                customEventName: 'myCustomEvent_1'
            },
            {
                label: '可设置多个自定义事件',
                customEventName: 'myCustomEvent_2'
            },
            {
                label: 'TypeScript',
                value: 0
            },
            {
                label: 'Java',
                value: 1
            },
            {
                label: 'Python',
                value: 2
            },
            {
                label: 'Dart',
                value: 3
            },
            {
                label: 'Go',
                value: 4
            }
        ]
    },
    SELECT_WITH_SINGLE_DISABLED: {
        component: 'select',
        items: [
            {
                label: 'TypeScript',
                value: 0
            },
            {
                label: 'Java',
                value: 1,
                attributes: {
                    disabled: true
                }
            },
            {
                label: 'Python',
                value: 2
            },
            {
                label: 'Dart',
                value: 3,
                attributes: {
                    disabled: true
                }
            },
            {
                label: 'Go',
                value: 4
            }
        ]
    },
    SELECT_WITH_MORE_TYPE: {
        component: 'select',
        items: [
            {
                label: '禁用项',
                value: 0,
                disabled: true
            },
            {
                label: '图片加标题',
                value: 1,
                labelIcon:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=' // eslint-disable-line
            },
            {
                label: '标题加内容',
                value: 2,
                content: '内容通常用作对于当前选项标题的拓展说明'
            },
            {
                label: '同时包含标题内容图片',
                value: 3,
                labelIcon:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=', // eslint-disable-line
                content: '内容通常用作对于当前选项标题的拓展说明'
            },
            {
                label: '仅标题',
                value: 4
            }
        ]
    }
};
