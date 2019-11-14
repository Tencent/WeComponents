export default {
    UPLOAD_BASIC: {
        component: 'upload'
    },
    UPLOAD_WITH_STRING_ARRAY_VALUE: {
        component: 'upload',
        validity: {
            // 对于upload组件，validity.format属性非常重要
            // 仅当format不为String时，upload才能展示多个文件
            // 仅当format为StringArray时，value字符串数组
            format: 'StringArray'
        },
        value: [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=', // eslint-disable-line
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=' // eslint-disable-line
        ]
    },
    UPLOAD_WITH_STRING_ARRAY_COMMAS_VALUE: {
        component: 'upload',
        validity: {
            // 对于upload组件，validity.format属性非常重要
            // 仅当format为StringArrayCommas时，value应为逗号分隔的字符串
            format: 'StringArrayCommas'
        },
        value:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=' // eslint-disable-line
    },
    UPLOAD_WITH_CUSTOM_OPTION: {
        component: 'upload',
        validity: {
            // 对于upload组件，validity.format属性非常重要
            // 仅当format为string_array_commas时，value应为逗号分隔的字符串
            format: 'StringArrayCommas'
        },
        attributes: {
            editable: false,
            deletable: false,
            options: [
                {
                    label: '自定义1',
                    type: 'custom1'
                },
                {
                    label: '自定义2',
                    type: 'custom2'
                }
            ]
        },
        value:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjBUbJAAAAEXRSTlMATD4gCgREMyUVGTAtKCc6Esc5kowAAADnSURBVDjLnZTdDoMgDIU5bQUUmXv/p93i1BMEJe5cGGm+0NI/94dGzSllHa+JKeBQmNqXCACZo2qc19/6uiEAXm0/mnogDCVjAsTCNkRArGA8PA1t4yBYeA3NC4TmAM8DQMojHO8CzLUgZ8D+RkF0bchFyJZDOiNEh9MWkboryCnCZrVryH7HEeIqiJI1dMV8B81rMBnxDorI32+CnqCpjDw1oBcpQnRXUnTHwCuKgTMFNcUUMJltygCWpabeLAsLfKISC8xWqcVWYdNRraZj+1Js32eD0B+p/nD2x7y/MPqrp7/EnusD2HAGNmaMnLgAAAAASUVORK5CYII=' // eslint-disable-line
    },
    UPLOAD_WITH_MULTIPLE: {
        component: 'upload',
        attributes: {
            multiple: true
        },
        validity: {
            format: 'StringArray'
        }
    },
    UPLOAD_WITH_CUSTOM_UPLOAD: {
        component: 'upload',
        attributes: {
            multiple: true
        },
        validity: {
            format: 'StringArray'
        }
    },
    UPLOAD_WITH_FILETYPE: {
        component: 'upload',
        attributes: {
            fileType: 'video'
        }
    },
    UPLOAD_WITH_BASIC_VALIDITY: {
        component: 'upload',
        validity: {
            width: 200,
            height: 200,
            size: 200,
            accept: ['jpg', 'png']
        }
    },
    UPLOAD_WITH_FILE_COUNT_VALIDITY: {
        component: 'upload',
        validity: {
            min: 2,
            max: 10,
            format: 'StringArray'
        }
    }
};
