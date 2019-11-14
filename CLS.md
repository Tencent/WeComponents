# 通用组件语言规范（Common Components Language Specification）

通用组件语言规范是将所有组件抽象为统一模型的一种标准描述方式，以JSON的形式呈现。

## 特点

 1. 通过改变JSON的属性和值，实现更新界面表现的目的，是声明式编程的一种实现。
 2. 以JSON形式的表述，与语言、框架无关。
 3. 组件抽象为统一模型，减少对说明文档的依赖。

## 设计原则

 1. 数据驱动
 2. 语义化
 3. 开发者友好


## 属性

通用组件语言规范的属性分成两个部分：

 * 名称
 * 实体：包含 Attributes、Events、Items、Validity 的子级结构。

### 名称定义

当前组件实例的标识。

| 属性名 | 类型    | 是否必填  | 说明
|-------|--------|----------|----------
| id    | String | Optional | 唯一标识，用于区分每一个组件实例
| name  | String | Optional | 数据标识，用于提交到服务端
| label | String | Optional | 文案，用于展示给用户

### 实体定义

| 属性名      | 类型    | 是否必填    | 说明
|------------|--------|------------|----------
| component  | String | Required   | 组件类型，取值依赖组件的实现
| value      | String/Array/Object | Optional | 组件取值，具体类型依赖validity.format 决定
| attributes | Object | Optional   | 组件属性，详见 Attributes 定义
| events     | Object | Optional   | 组件触发的事件，详见 Events 定义
| items      | Array  | Optional   | 下个层级
| validity   | Object | Optional   | 数据有效性校验，详见 validity 定义

### Attributes 定义

| 属性名       | 类型     | 是否必填  | 默认值    | 说明
|-------------|---------|----------|----------|----------
| class       | String  | Optional | -        | 组件容器的样式名
| style       | String  | Optional | -        | 组件容器的style
| hide        | Boolean | Optional | false    | 是否隐藏
| placeholder | String  | Optional | -        | 默认占位文案
| multiple    | Boolean | Optional | false    | 是否items子项可多选
| defaults    | Array   | Optional | -        | 默认展示，如items的默认展示
| disabled    | Boolean | Optional | false    | 是否禁用编辑
| readonly    | Boolean | Optional | false    | 是否只读
| sortable    | Boolean | Optional | false    | 是否支持对items子项排序
| searchable  | Boolean | Optional | false    | 是否支持对items子项搜索
| resetable   | Boolean | Optional | false    | 是否在组件本身支持清空value
| repeated    | Boolean | Optional | false    | 为true时，根据value循环渲染items对应的组件

### Events 定义

| 属性名       | 类型      | 是否必填  | 默认值        | 说明
|-------------|----------|----------|--------------|----------
| click       | Function | Optional | onClick      | 抛出当前组件的点击事件
| dblClick    | Function | Optional | onDblClick   | 抛出当前组件的双击事件
| mouseEnter  | Function | Optional | onMouseEnter | 抛出当前组件的鼠标移入事件
| mouseLeave  | Function | Optional | onMouseLeave | 抛出当前组件的鼠标移出事件
| change      | Function | Optional | onChange     | 抛出当前组件的值变化
| dragEnd     | Function | Optional | onDragEnd    | 抛出当前组件的拖拽结束事件

### Validity 定义

| 属性名       | 类型      | 是否必填  | 默认值    | 说明
|-------------|----------|----------|----------|----------
| required    | String   | Optional | false    | 组件值是否必填
| format      | String   | Optional | -        | 组件值的数据类型，包含String/Number/StringArray/StringArrayCommas *
| min         | Number   | Optional | -        | 最小值/最小长度
| max         | Number   | Optional | -        | 最大值/最大长度


## 方法

| 方法名                      | 说明
|----------------------------|-------------------------
| getValue(name)             | 通过name获取组件的value取值，并结合validity的format字段，返回对应数据类型的value
| setValue(name, value)      | 通过name设置组件的value取值，value入参需结合validity的format字段，传入对应的数据类型
| getAttributes(name)        | 通过name获取组件属性
| setAttributes(name, value) | 通过name设置组件属性
| show(id)                   | 展示指定id对应的组件
| hide(id)                   | 隐藏制定id对应的组件
| getItem(id)                | 获取id对应的组件和其完整的配置
| removeItem(id)             | 删除id对应的组件


## 实例

WeComponents 是 CLS 基于vuejs的一个实现。
