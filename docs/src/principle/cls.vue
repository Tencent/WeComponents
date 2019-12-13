<template>
    <div>
        <h1 id="toc_0">通用组件语言规范（Common Components Language Specification）</h1>

        <p>通用组件语言规范 (简称CLS) 是将所有组件抽象为统一模型，采用跨端的数据交换格式（如JSON、XML）对组件进行标准化描述，与平台、语言、框架无关。</p>

        <h2 id="toc_1">设计原则</h2>

        <ul>
            <li>数据驱动：UI 也是数据，以数据结构描述组件，以组件描述页面</li>
            <li>开发者友好：低门槛，学习了一种组件语言，就学会了整个组件库的使用；易理解，易记忆，易使用</li>
            <li>语义化：符合一般人对功能的认知；合适的场景，合适的支持</li>
        </ul>

        <h2 id="toc_2">内容</h2>
        <p>通用组件语言规范的属性分为：</p>
        <ul>
            <li>
                <strong>基础信息</strong>：id、name、label、component、value
            </li>
            <li>
                <strong>实体属性</strong>：包含 Attributes、Events、Items、Validity 的子级结构
            </li>
            <li>
                <strong>扩展属性</strong>：extra
            </li>
        </ul>

        <h3 id="toc_3">基础属性定义</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>否</td>
                    <td>''</td>
                    <td>唯一标识，用于区分每一个组件实例；若需显式调用方法对组件进行操作，则必填</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>否</td>
                    <td>''</td>
                    <td>数据标识，用于提交到服务端</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>否</td>
                    <td>''</td>
                    <td>若传入String，则显示为纯文本</td>
                </tr>
                <tr>
                    <td>component</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件类型，取值依赖组件的实现</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>String/Array/Object</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件取值，具体类型依赖validity.format 决定</td>
                </tr>
                <tr>
                    <td>valueFilterName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件值的格式化函数名，会做局部范围的广播，需要做对应捕获并实现</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_4">实体属性定义</h3>

        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>attributes</td>
                    <td>Attributes</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件属性，详见 Attributes 定义</td>
                </tr>
                <tr>
                    <td>events</td>
                    <td>Events</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件触发的事件，详见 Events 定义</td>
                </tr>
                <tr>
                    <td>items</td>
                    <td>Array</td>
                    <td>否</td>
                    <td>-</td>
                    <td>下个层级，嵌套的树状结构</td>
                </tr>
                <tr>
                    <td>validity</td>
                    <td>Object</td>
                    <td>否</td>
                    <td>-</td>
                    <td>数据有效性校验，详见 Validity 定义</td>
                </tr>
                <tr>
                    <td>extra</td>
                    <td>Object</td>
                    <td>否</td>
                    <td>-</td>
                    <td>扩展属性，透传</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_5">Attributes 定义</h3>

        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>class</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件容器的样式名</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件容器的style</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>否</td>
                    <td>''</td>
                    <td>默认占位文案</td>
                </tr>
                <tr>
                    <td>defaults</td>
                    <td>Array</td>
                    <td>否</td>
                    <td>-</td>
                    <td>默认展示，如items的默认展示</td>
                </tr>
                <tr>
                    <td>hide</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否隐藏</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否items子项可多选</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>组件是否禁用编辑</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否只读</td>
                </tr>
                <tr>
                    <td>repeated</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否组件子项为可重复的</td>
                </tr>
                <tr>
                    <td>sortable</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否支持对items子项排序</td>
                </tr>
                <tr>
                    <td>searchable</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否支持对items子项搜索</td>
                </tr>
                <tr>
                    <td>resetable</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>false</td>
                    <td>是否支持清空value</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_6">Events 定义</h3>

        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>参数</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>clickEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onClick</td>
                    <td>抛出当前组件的点击事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
                <tr>
                    <td>dblClickEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onDblClick</td>
                    <td>抛出当前组件的双击事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
                <tr>
                    <td>mouseEnterEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onMouseEnter</td>
                    <td>抛出当前组件的鼠标移入事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
                <tr>
                    <td>mouseLeaveEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onMouseLeave</td>
                    <td>抛出当前组件的鼠标移出事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
                <tr>
                    <td>changeEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onChange</td>
                    <td>抛出当前组件的值变化事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
                <tr>
                    <td>dragEndEventName</td>
                    <td>String</td>
                    <td>否</td>
                    <td>onDragEnd</td>
                    <td>抛出当前组件的拖拽结束事件，局部范围广播，需要做对应捕获并实现</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_7">Validity 定义</h3>

        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>required</td>
                    <td>String</td>
                    <td>否</td>
                    <td>false</td>
                    <td>组件值是否必填</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>组件值的数据类型，包含String/Number/StringArray/StringArrayCommas</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>Number</td>
                    <td>否</td>
                    <td>-</td>
                    <td>最小值/最小长度</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>Number</td>
                    <td>否</td>
                    <td>-</td>
                    <td>最大值/最大长度</td>
                </tr>
                <tr>
                    <td>pattern</td>
                    <td>String</td>
                    <td>否</td>
                    <td>-</td>
                    <td>正则表达式</td>
                </tr>
            </tbody>
        </table>

        <h2 id="toc_8">方法</h2>
        <table>
            <thead>
                <tr>
                    <th>方法名</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>getComponent(id)</td>
                    <td>获取组件和其完整的配置</td>
                </tr>
                <tr>
                    <td>setComponent(id, componentConfig)</td>
                    <td>设置组件的全部属性</td>
                </tr>
                <tr>
                    <td>appendComponent(parentId, componentConfig)</td>
                    <td>追加组件</td>
                </tr>
                <tr>
                    <td>insertBeforeComponent(beforeComponentId, componentConfig)</td>
                    <td>在beforeComponentId前插入新组件</td>
                </tr>
                <tr>
                    <td>removeComponent(id)</td>
                    <td>删除组件</td>
                </tr>
                <tr>
                    <td>getValue(id)</td>
                    <td>获取组件的value取值，并结合validity的format字段，返回对应数据类型的value；如果是容器，则返回子节点所有的值</td>
                </tr>
                <tr>
                    <td>setValue(id, value)</td>
                    <td>设置组件的value取值，value入参需结合validity的format字段，传入对应的数据类型；如果是容器，则可按照name对应设置所有子节点的值</td>
                </tr>
                <tr>
                    <td>getAttributes(id)</td>
                    <td>获取组件属性</td>
                </tr>
                <tr>
                    <td>setAttributes(id, values)</td>
                    <td>设置组件属性</td>
                </tr>
                <tr>
                    <td>getEvents(id)</td>
                    <td>获取事件名称</td>
                </tr>
                <tr>
                    <td>setEvents(id, values)</td>
                    <td>设置事件名称</td>
                </tr>
                <tr>
                    <td>trigger(id, eventName, extentData)</td>
                    <td>触发指定组件上的对应事件</td>
                </tr>
                <tr>
                    <td>getItems(id)</td>
                    <td>获取子层级</td>
                </tr>
                <tr>
                    <td>setItems(id, values)</td>
                    <td>设置子层级</td>
                </tr>
                <tr>
                    <td>getValidity(id)</td>
                    <td>获取有效性验证规则</td>
                </tr>
                <tr>
                    <td>setValidity(id, values)</td>
                    <td>设置有效性验证规则</td>
                </tr>
                <tr>
                    <td>show(id)</td>
                    <td>展示指定组件</td>
                </tr>
                <tr>
                    <td>hide(id)</td>
                    <td>隐藏指定组件</td>
                </tr>
                <tr>
                    <td>enable(id)</td>
                    <td>启用指定组件，如form场景</td>
                </tr>
                <tr>
                    <td>disable(id)</td>
                    <td>禁用指定组件，如form场景</td>
                </tr>
            </tbody>
        </table>

        <h2 id="toc_9">传递数据定义</h2>

        <h3 id="toc_10">Event Data 定义</h3>
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>默认值</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>type</td>
                    <td>String</td>
                    <td>是</td>
                    <td>-</td>
                    <td>自定义的事件名</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>Object</td>
                    <td>是</td>
                    <td>-</td>
                    <td>此事件对应的组件的值</td>
                </tr>
                <tr>
                    <td>target</td>
                    <td>Object</td>
                    <td>是</td>
                    <td>-</td>
                    <td>触发此事件的组件实例</td>
                </tr>
                <tr>
                    <td>targetItem</td>
                    <td>Object</td>
                    <td>是</td>
                    <td>-</td>
                    <td>触发此事件的组件的配置</td>
                </tr>
                <tr>
                    <td>nativeEvent</td>
                    <td>Object</td>
                    <td>是</td>
                    <td>-</td>
                    <td>原生事件对象</td>
                </tr>
            </tbody>
        </table>

        <h2 id="toc_11">实例</h2>
        <p>
            <a href="https://github.com/Tencent/WeComponents">WeComponents</a> 是基于 CLS 在Vue.js的一个实现。
        </p>
    </div>
</template>

<style type="text/css" scoped>
body {
    font-family: Helvetica, arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 30px;
}

body > *:first-child {
    margin-top: 0 !important;
}
body > *:last-child {
    margin-bottom: 0 !important;
}

a {
    color: #4183c4;
}
a.absent {
    color: #cc0000;
}
a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
}

h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    /* eslint-disable */
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM2NjlDQjI4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM2NjlDQjM4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzY2OUNCMDg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzY2OUNCMTg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsQhXeAAAABfSURBVHjaYvz//z8DJYCRUgMYQAbAMBQIAvEqkBQWXI6sHqwHiwG70TTBxGaiWwjCTGgOUgJiF1J8wMRAIUA34B4Q76HUBelAfJYSA0CuMIEaRP8wGIkGMA54bgQIMACAmkXJi0hKJQAAAABJRU5ErkJggg==)
        no-repeat 10px center;
    /* eslint-enable */
    text-decoration: none;
}

h1 tt,
h1 code {
    font-size: inherit;
}

h2 tt,
h2 code {
    font-size: inherit;
}

h3 tt,
h3 code {
    font-size: inherit;
}

h4 tt,
h4 code {
    font-size: inherit;
}

h5 tt,
h5 code {
    font-size: inherit;
}

h6 tt,
h6 code {
    font-size: inherit;
}

h1 {
    font-size: 28px;
    color: black;
}

h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black;
}

h3 {
    font-size: 18px;
}

h4 {
    font-size: 16px;
}

h5 {
    font-size: 14px;
}

h6 {
    color: #777777;
    font-size: 14px;
}

p,
blockquote,
ul,
ol,
dl,
li,
table,
pre {
    margin: 15px 0;
}

hr {
    /* eslint-disable */
    background: transparent
        url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC)
        repeat-x 0 0;
    /* eslint-enable */
    border: 0 none;
    color: #cccccc;
    height: 4px;
    padding: 0;
}

body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
}
body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
}
body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
}
body > h3:first-child,
body > h4:first-child,
body > h5:first-child,
body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
}

a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
}

h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p {
    margin-top: 0;
}

li p.first {
    display: inline-block;
}
li {
    margin: 0;
}
ul,
ol {
    padding-left: 30px;
}

ul :first-child,
ol :first-child {
    margin-top: 0;
}

dl {
    padding: 0;
}
dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
}
dl dt:first-child {
    padding: 0;
}
dl dt > :first-child {
    margin-top: 0;
}
dl dt > :last-child {
    margin-bottom: 0;
}
dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
}
dl dd > :first-child {
    margin-top: 0;
}
dl dd > :last-child {
    margin-bottom: 0;
}

blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
}
blockquote > :first-child {
    margin-top: 0;
}
blockquote > :last-child {
    margin-bottom: 0;
}

table {
    padding: 0;
    border-collapse: collapse;
}
table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n) {
    background-color: #f8f8f8;
}
table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    margin: 0;
    padding: 6px 13px;
}
table tr td {
    border: 1px solid #cccccc;
    margin: 0;
    padding: 6px 13px;
}
table tr th :first-child,
table tr td :first-child {
    margin-top: 0;
}
table tr th :last-child,
table tr td :last-child {
    margin-bottom: 0;
}

img {
    max-width: 100%;
}

span.frame {
    display: block;
    overflow: hidden;
}
span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
}
span.frame span img {
    display: block;
    float: left;
}
span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
}
span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
}
span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
}
span.align-center span img {
    margin: 0 auto;
    text-align: center;
}
span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
}
span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
}
span.align-right span img {
    margin: 0;
    text-align: right;
}
span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
}
span.float-left span {
    margin: 13px 0 0;
}
span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
}
span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
}

code,
tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
}

pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
}

.highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
}

pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
}
pre code,
pre tt {
    background-color: transparent;
    border: none;
}

sup {
    font-size: 0.83em;
    vertical-align: super;
    line-height: 0;
}

kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #555;
    vertical-align: middle;
    background-color: #fcfcfc;
    border: solid 1px #ccc;
    border-bottom-color: #bbb;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #bbb;
}

* {
    -webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
    body {
        width: 854px;
        margin: 0 auto;
    }
}
@media print {
    table,
    pre {
        page-break-inside: avoid;
    }
    pre {
        word-wrap: break-word;
    }
}
</style>
