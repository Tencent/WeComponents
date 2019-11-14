<template>
    <div>
        <h1 id="toc_0">WeAdmin CLS</h1>

        <p>WeAdmin CLS(Common/Components Language Specs)是一套与语言、框架无关的组件通用语言规范，用以解决组件库一致性、易用性的问题。</p>

        <h2 id="toc_1">设计原则</h2>

        <ul>
            <li>数据驱动：以数据描述组件/页面的结构和功能</li>
            <li>语义化：页面JSON描述接近日常语言和思维</li>
            <li>对开发者友好：简洁一致的API签名；同时支持同步和异步调用；提供合理的警告和错误文案</li>
        </ul>

        <h2 id="toc_2">内容</h2>

        <h3 id="toc_3">Name</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>是</td>
                    <td>组件的唯一标识</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>否</td>
                    <td>组件承载数据的key</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>否</td>
                    <td>若传入String，则显示为纯文本</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_4">Entity</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>component</td>
                    <td>String</td>
                    <td>否</td>
                    <td>组件名称，唯一</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>String/Array/Object</td>
                    <td>否</td>
                    <td>组件承载数据的value</td>
                </tr>
                <tr>
                    <td>attributes</td>
                    <td>Attributes</td>
                    <td>否</td>
                    <td>控制组件原生属性和自定义属性的集合，例如input的readonly、placeholder，自定义组件的disabled等</td>
                </tr>
                <tr>
                    <td>events</td>
                    <td>Events</td>
                    <td>否</td>
                    <td>组件支持的事件集合</td>
                </tr>
                <tr>
                    <td>items</td>
                    <td>Array</td>
                    <td>否</td>
                    <td>对于所有需要列表数据的组件，统一使用items传入，使用场景如select的下拉列表，表格列配置等</td>
                </tr>
                <tr>
                    <td>decoration</td>
                    <td>Array</td>
                    <td>否</td>
                    <td>对于所有需要列表数据的组件，统一使用items传入，使用场景如select的下拉列表，表格列配置等</td>
                </tr>
                <tr>
                    <td>validity</td>
                    <td>Object</td>
                    <td>否</td>
                    <td>使用表单提交数据时的校验，会依据format的具体值选择对应的校验逻辑，如需了解细节，可参考“format-validity对应表”</td>
                </tr>
                <tr>
                    <td>extra</td>
                    <td>Object</td>
                    <td>否</td>
                    <td>在引入外部组件的场景下，用于向外部组件透传属性</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_5">Attributes</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>class</td>
                    <td>String</td>
                    <td>组件顶层的CSS类名</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>String</td>
                    <td>组件顶层的style</td>
                </tr>
                <tr>
                    <td>hide</td>
                    <td>Boolean</td>
                    <td>组件是否隐藏</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>Boolean</td>
                    <td>组件是否禁用编辑</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>Boolean</td>
                    <td>设置组件的值时，需进行二次确认</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>value为空时的默认展示文案</td>
                </tr>
                <tr>
                    <td>sortable</td>
                    <td>Boolean</td>
                    <td>items中的每项是否能够拖动改变顺序</td>
                </tr>
                <tr>
                    <td>searchable</td>
                    <td>Boolean</td>
                    <td>是否支持对items的搜索</td>
                </tr>
                <tr>
                    <td>multiple</td>
                    <td>Boolean</td>
                    <td>是否支持对items的多选</td>
                </tr>
                <tr>
                    <td>defaults</td>
                    <td>Array</td>
                    <td>items的默认值</td>
                </tr>
                <tr>
                    <td>resetable</td>
                    <td>Boolean</td>
                    <td>是否在组件本身支持清空value</td>
                </tr>
                <tr>
                    <td>repeated</td>
                    <td>Boolean</td>
                    <td>当容器组件设置repeated为true时，则根据value的值，循环渲染items对应的组件</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>String</td>
                    <td>decoration元素的相对位置</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_6">Events</h3>

        <h4 id="toc_7">通用事件</h4>

        <table>
            <thead>
                <tr>
                    <th>事件名</th>
                    <th>事件参数</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>click</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>监听组件的点击事件</td>
                </tr>
                <tr>
                    <td>dbClick</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>监听组件的双击事件</td>
                </tr>
                <tr>
                    <td>mouseEnter</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>监听组件的鼠标移入事件</td>
                </tr>
                <tr>
                    <td>mouseLeave</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>监听组件的鼠标移出事件</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>监听组件值的变化</td>
                </tr>
                <tr>
                    <td>dragEnd</td>
                    <td>
                        this: 当前组件的JSON对象
                        <br />event: 当前事件对象
                    </td>
                    <td>拖拽事件结束时的钩子函数，仅当attributes.draggable为true时生效</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_8">通用validity属性</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>required</td>
                    <td>String</td>
                    <td>组件值是否必填</td>
                </tr>
                <tr>
                    <td>format</td>
                    <td>String</td>
                    <td>组件值的数据类型，包含String/Number/StringArray/StringArrayCommas</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_9">format/validity对应关系</h3>

        <ul>
            <li>当format指定后，validity会对当前组件的值基于Object.prototype.toString.call进行类型判断</li>
            <li>不同的format类型对应不同的最大/最小值参数，列表如下：</li>
        </ul>

        <table>
            <thead>
                <tr>
                    <th>format</th>
                    <th>validity</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>String</td>
                    <td>
                        min: 字符串的最小长度
                        <br />max: 字符串的最大长度
                    </td>
                </tr>
                <tr>
                    <td>Number</td>
                    <td>
                        min: 数字的最小值
                        <br />max: 数字的最大值
                    </td>
                </tr>
            </tbody>
        </table>

        <h2 id="toc_10">特殊接口：各组件额外配置</h2>

        <h3 id="toc_11">特殊属性</h3>

        <p>部分组件提供着比较特殊的功能，对于这部分功能，如果强行归类到基础API中反而会造成开发者理解上的负担，因此，对于这类功能，我们提供了只在对应组件上才生效的特殊的API，列表如下：</p>

        <table>
            <thead>
                <tr>
                    <th>组件名</th>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>说明</th>
                    <th>默认值</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>VCalendar</td>
                    <td>attributes.accept</td>
                    <td>String</td>
                    <td>是</td>
                    <td>日期组件接受的日期格式，如YYYY-MM-DD、YYYY-MM-DD HH:mm等</td>
                    <td>YYYY-MM-DD HH:mm:ss</td>
                </tr>
                <tr>
                    <td>VImg</td>
                    <td>attributes.accept</td>
                    <td>String</td>
                    <td>是</td>
                    <td>图片组件接受的图片格式，包含png、jpg等常用图片格式</td>
                    <td>png</td>
                </tr>
                <tr>
                    <td>VUpload</td>
                    <td>apis.beforeUpload</td>
                    <td>Function</td>
                    <td>否</td>
                    <td>图片上传前的钩子函数</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>VPagination</td>
                    <td>attributes.pageSize</td>
                    <td>Number</td>
                    <td>否</td>
                    <td>分页组件每页展示的最大条数</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>VPagination</td>
                    <td>attributes.total</td>
                    <td>Number</td>
                    <td>否</td>
                    <td>分页组件的总页数</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>VPagination</td>
                    <td>attributes.showTotalNum</td>
                    <td>Boolean</td>
                    <td>否</td>
                    <td>是否展示分页组件的对应数据的总条数</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>VCheckbox</td>
                    <td>
                        field.itemKey: checkbox对应的列表配置
                        <br />field.itemKey的每一项设为item:
                        <br />item.labelField: 列表每项的展示值对应的字段key值
                        <br />item.valueField: 列表每项的实际值对应的字段key值
                    </td>
                    <td>
                        itemKey: Array
                        <br />itemKey中的每一项: Object
                        <br />labelField: String
                        <br />valueField: String
                    </td>
                    <td>否</td>
                    <td>Checkbox的特殊实现，用以实现数据与列表每项的展示值和实际值的对应关系</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_12">特殊事件</h3>

        <table>
            <thead>
                <tr>
                    <th>组件名</th>
                    <th>事件名</th>
                    <th>事件参数</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>VDynamicTag</td>
                    <td>add</td>
                    <td>type: 子事件类型，目前仅有append和默认值</td>
                    <td>监听dynamicTag的增加</td>
                </tr>
                <tr>
                    <td>VDynamicTag</td>
                    <td>remove</td>
                    <td>
                        type: 子事件类型，目前仅有array和默认值
                        <br />index: 删除的tag在当前数组中的位置
                    </td>
                    <td>监听dynamicTag的删除</td>
                </tr>
                <tr>
                    <td>VUpload</td>
                    <td>success</td>
                    <td>
                        context: 单图上传成功时的上下文
                        <br />name: 组件id
                        <br />res: 上传成功后服务器返回的response对象
                        <br />fileName: 图片名称
                        <br />item:图片对象
                    </td>
                    <td>监听组件的鼠标移出事件</td>
                </tr>
                <tr>
                    <td>VUpload</td>
                    <td>fail</td>
                    <td>res: 服务器返回的response对象</td>
                    <td>监听图片的上传失败事件</td>
                </tr>
                <tr>
                    <td>VUpload</td>
                    <td>remove</td>
                    <td>
                        context: 当前事件的上下文
                        <br />event: 事件对象
                    </td>
                    <td>监听图片的删除事件</td>
                </tr>
            </tbody>
        </table>

        <h3 id="toc_13">特殊validity属性</h3>

        <table>
            <thead>
                <tr>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>说明</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>width</td>
                    <td>Number</td>
                    <td>组件允许的图片的宽度，单位为px</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>Number</td>
                    <td>组件允许的图片的高度，单位为px</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>Number</td>
                    <td>组件允许的文件最大值，单位为kb</td>
                </tr>
            </tbody>
        </table>

        <h2 id="toc_14">使用extra为外部组件透传参数</h2>

        <table>
            <thead>
                <tr>
                    <th>组件名</th>
                    <th>参数名</th>
                    <th>类型</th>
                    <th>必填</th>
                    <th>说明</th>
                    <th>默认值</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>VTree</td>
                    <td>extra.scoped</td>
                    <td>Boolean</td>
                    <td>是</td>
                    <td>是否隔离节点选中状态</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>VTree</td>
                    <td>extra.template</td>
                    <td>Function</td>
                    <td>是</td>
                    <td>自定义模板</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>VTree</td>
                    <td>extra.halfcheck</td>
                    <td>Boolean</td>
                    <td>是</td>
                    <td>节点是否为半选</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>VQueryBuilder</td>
                    <td>
                        field.extra.rules: 规则数组
                        <br />field.extra.styled: 样式对象
                        <br />field.extra.maxDepth: 规则的最大嵌套深度
                        <br />
                    </td>
                    <td>
                        field.extra.rules: Array
                        <br />field.extra.styled: Object
                        <br />field.extra.maxDepth: Number
                        <br />
                    </td>
                    <td>是</td>
                    <td>基于外部组件，实现为属性的透传</td>
                    <td>无</td>
                </tr>
            </tbody>
        </table>
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
