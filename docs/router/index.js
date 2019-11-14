import Index from '@/src/Index';
import PrincipleCLS from '@/src/principle/cls';
import Container from '@/src/components/container/base';
import Table from '@/src/components/container/table';
import Input from '@/src/components/form/input';
import Button from '@/src/components/form/button';
import Select from '@/src/components/form/select';
import Radio from '@/src/components/form/radio';
import Processor from '@/src/components/form/processor';
import Text from '@/src/components/form/text';
import Textarea from '@/src/components/form/textarea';
import Upload from '@/src/components/form/upload';
import Dialog from '@/src/components/mention/dialog';
import Tips from '@/src/components/mention/tips';
import Access from '@/src/components/basic/access';
import API from '@/src/components/basic/api';
import SLOT from '@/src/components/basic/slot';
import Checkbox from '@/src/components/form/checkbox';
import Tab from '@/src/components/form/tab';
import Calendar from '@/src/components/form/calendar';
import FormBlock from '@/src/examples/block/form';
import TableBlock from '@/src/examples/block/table';
import ChartBlock from '@/src/examples/block/chart';
import Update from '@/src/update/update';

// import Events from '@/src/basic/events';

export default {
    // mode    : 'history',
    // linkExactActiveClass: 'mod-frame__tab-item_current',
    routes: [
        {
            path: '/doc',
            redirect: '/doc/principle',
            component: Index,
            meta: {
                label: '设计思想'
            },
            children: [
                {
                    path: '/doc/principle',
                    redirect: '/doc/principle/cls',
                    component: Index,
                    meta: {
                        label: '设计原则'
                    },
                    children: [
                        {
                            path: '/doc/principle/cls',
                            component: PrincipleCLS,
                            meta: {
                                label: '通用组件语言规范'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/components',
            redirect: 'components/container',
            alias: '/',
            component: Index,
            meta: {
                label: '组件文档'
            },
            children: [
                {
                    path: '/components/basic',
                    component: Index,
                    meta: {
                        label: '整体介绍'
                    },
                    children: [
                        {
                            path: '/components/basic/access',
                            component: Access,
                            meta: {
                                label: '接入指引'
                            }
                        },
                        {
                            path: '/components/basic/api',
                            component: API,
                            meta: {
                                label: '组件API'
                            }
                        },
                        {
                            path: '/components/basic/slot',
                            component: SLOT,
                            meta: {
                                label: '使用插槽'
                            }
                        }
                    ]
                },
                {
                    path: '/components/container',
                    redirect: '/components/container/container',
                    component: Index,
                    meta: {
                        label: '容器类'
                    },
                    children: [
                        {
                            path: '/components/container/container',
                            component: Container,
                            meta: {
                                label: 'Container'
                            }
                        },
                        {
                            path: '/components/container/table',
                            component: Table,
                            meta: {
                                label: 'Table'
                            }
                        }
                    ]
                },
                {
                    path: '/components/form',
                    component: Index,
                    meta: {
                        label: '表单类'
                    },
                    children: [
                        {
                            path: '/components/form/input',
                            component: Input,
                            meta: {
                                label: 'Input'
                            }
                        },
                        {
                            path: '/components/form/button',
                            component: Button,
                            meta: {
                                label: 'Button'
                            }
                        },
                        {
                            path: '/components/form/select',
                            component: Select,
                            meta: {
                                label: 'Select'
                            }
                        },
                        {
                            path: '/components/form/radio',
                            component: Radio,
                            meta: {
                                label: 'Radio'
                            }
                        },
                        {
                            path: '/components/form/processor',
                            component: Processor,
                            meta: {
                                label: 'Processor'
                            }
                        },
                        {
                            path: '/components/form/text',
                            component: Text,
                            meta: {
                                label: 'Text'
                            }
                        },
                        {
                            path: '/components/form/textarea',
                            component: Textarea,
                            meta: {
                                label: 'Textarea'
                            }
                        },
                        {
                            path: '/components/form/upload',
                            component: Upload,
                            meta: {
                                label: 'Upload'
                            }
                        },
                        {
                            path: '/components/form/checkbox',
                            component: Checkbox,
                            meta: {
                                label: 'Checkbox'
                            }
                        },
                        {
                            path: '/components/form/tab',
                            component: Tab,
                            meta: {
                                label: 'Tab'
                            }
                        },
                        {
                            path: '/components/form/calendar',
                            component: Calendar,
                            meta: {
                                label: 'Calendar'
                            }
                        }
                    ]
                },
                {
                    path: '/components/mention',
                    component: Index,
                    meta: {
                        label: '提示类'
                    },
                    children: [
                        {
                            path: '/components/mention/dialog',
                            component: Dialog,
                            meta: {
                                label: 'Dialog'
                            }
                        },
                        {
                            path: '/components/mention/tips',
                            component: Tips,
                            meta: {
                                label: 'Tips'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/block',
            redirect: '/block/tob',
            component: Index,
            meta: {
                label: '区块示例'
            },
            children: [
                {
                    path: '/block/tob',
                    redirect: '/block/tob/form',
                    meta: {
                        label: 'B端常用区块'
                    },
                    component: Index,
                    children: [
                        {
                            path: '/block/tob/form',
                            meta: {
                                label: '表单'
                            },
                            component: FormBlock
                        },
                        {
                            path: '/block/tob/table',
                            meta: {
                                label: '表格'
                            },
                            component: TableBlock
                        },
                        {
                            path: '/block/tob/chart',
                            meta: {
                                label: '图表'
                            },
                            component: ChartBlock
                        }
                    ]
                }
            ]
        },
        {
            path: '/update',
            redirect: '/update/daily',
            component: Index,
            meta: {
                label: '更新日志'
            },
            children: [
                {
                    path: '/update/daily',
                    meta: {
                        label: '更新日志'
                    },
                    component: Update
                }
            ]
        }
    ]
};
