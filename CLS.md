# 通用组件语言规范（Common Components Language Specification）

通用组件语言规范是将所有组件抽象为统一模型的一种标准描述方式，与语言、框架无关。

## 特点

 1. 通过改变JSON的属性和值，实现更新界面表现的目的，是声明式编程的一种实现。
 2. 以JSON形式的表述，与语言、框架无关。
 3. 组件抽象为统一模型，减少对说明文档的依赖。

## 设计原则

 1. 数据驱动
 2. 开发者友好
 3. 语义化


## 属性

通用组件语言规范的属性分为：

 * 基础信息：id、name、label、component、value
 * 实体属性：包含 Attributes、Events、Items、Validity 的子级结构
 * 扩展属性：extra

### 基础属性定义

当前组件实例的标识。

| 名称        | 类型    | 必填       | 默认值    | 说明
|------------|--------|------------|----------|----------
| id         | String | Optional   | ''       | 唯一标识，用于区分每一个组件实例
| name       | String | Optional   | ''       | 数据标识，用于提交到服务端
| label      | String | Optional   | ''       | 文案，用于展示给用户
| component  | String | Required   | -        | 组件类型，取值依赖组件的实现
| value      | String/Array/Object | Optional | -        | 组件取值，具体类型依赖validity.format 决定

### 实体属性定义

| 名称        | 类型        | 必填       | 默认值    | 说明
|------------|------------|------------|----------|----------
| attributes | Attributes | Optional   | -       | 组件属性，详见 Attributes 定义
| events     | Events     | Optional   | -       | 组件触发的事件，详见 Events 定义
| items      | Array      | Optional   | -       | 下个层级，嵌套的树状结构
| validity   | Validity   | Optional   | -       | 数据有效性校验，详见 Validity 定义
| extra      | Object     | Optional   | -       | 扩展属性，透传


### Attributes 定义

| 名称         | 类型     | 必填     | 默认值    | 说明
|-------------|---------|----------|----------|----------
| class       | String  | Optional | -        | 组件容器的样式名
| style       | String  | Optional | -        | 组件容器的style
| placeholder | String  | Optional | ''       | 默认占位文案
| defaults    | Array   | Optional | -        | 默认展示，如items的默认展示
| hide        | Boolean | Optional | false    | 是否隐藏
| multiple    | Boolean | Optional | false    | 是否items子项可多选
| disabled    | Boolean | Optional | false    | 是否禁用编辑
| readonly    | Boolean | Optional | false    | 是否只读
| repeated    | Boolean | Optional | false    | 是否组件子项为可重复的
| sortable    | Boolean | Optional | false    | 是否支持对items子项排序
| searchable  | Boolean | Optional | false    | 是否支持对items子项搜索
| resetable   | Boolean | Optional | false    | 是否支持清空value

### Events 定义

| 名称                  | 类型      | 必填     | 默认值        | 说明
|----------------------|----------|----------|--------------|----------
| clickEventName       | Function | Optional | onClick      | 抛出当前组件的点击事件
| dblClickEventName    | Function | Optional | onDblClick   | 抛出当前组件的双击事件
| mouseEnterEventName  | Function | Optional | onMouseEnter | 抛出当前组件的鼠标移入事件
| mouseLeaveEventName  | Function | Optional | onMouseLeave | 抛出当前组件的鼠标移出事件
| changeEventName      | Function | Optional | onChange     | 抛出当前组件的值变化
| dragEndEventName     | Function | Optional | onDragEnd    | 抛出当前组件的拖拽结束事件

### Validity 定义

| 名称         | 类型      | 必填     | 默认值    | 说明
|-------------|----------|----------|----------|----------
| required    | Boolean  | Optional | false    | 组件值是否必填
| format      | String   | Optional | -        | 组件值的数据类型，包含String/Number/Boolean/StringArray/StringArrayCommas *
| min         | Number   | Optional | -        | 最小值/最小长度
| max         | Number   | Optional | -        | 最大值/最大长度
| pattern     | String   | Optional | -        | 正则表达式


## 方法

| 方法名                      | 说明
|----------------------------|-------------------------
| getValue(name)             | 获取组件的value取值，并结合validity的format字段，返回对应数据类型的value
| setValue(name, value)      | 设置组件的value取值，value入参需结合validity的format字段，传入对应的数据类型
| getAttributes(name)        | 获取组件属性
| setAttributes(name, value) | 设置组件属性
| show(id)                   | 展示对应的组件
| hide(id)                   | 隐藏对应的组件
| getItem(id)                | 获取组件和其完整的配置
| removeItem(id)             | 删除组件
| trigger(eventData)         | 触发对应事件

### Event Data 定义

| 名称         | 类型      | 必填     | 默认值    | 说明
|-------------|----------|----------|----------|----------
| type        | String   | Required | -        | 自定义的事件名
| data        | Object   | Required | -        | 此事件对应的组件的值
| target      | Object   | Required | -        | 触发此事件的组件实例
| targetItem  | Object   | Required | -        | 触发此事件的组件的配置
| nativeEvent | Object   | Required | -        | 原生事件对象


## 实例

WeComponents 是基于 CLS 在Vue.js的一个实现。
