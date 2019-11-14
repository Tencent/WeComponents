export default {
    TEXT_BASIC: {
        label: 'Text基本用法',
        value: '因为默认为Text组件，所以使用纯文本组件时，可以不设置component的值'
    },
    TEXT_WITH_SIZE: {
        value: 'size为枚举值，包含small/medium/large',
        attributes: {
            size: 'large',
            bold: true
        }
    },
    TEXT_WITH_RICHTEXT: {
        label: 'Text组件的value允许传入html文本',
        value: `<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=" />` // eslint-disable-line
    }
};
