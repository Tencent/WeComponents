<script>
	// item作为中转函数组件，需持有其他组件引用
	import VInput from "./components/input/input.vue";
	import VContainer from "./components/container/container.vue";
	import VButton from "./components/button/button.vue";
	import VTable from "./components/table/table.vue";
	import VText from "./components/text/text.vue";
	import VRadio from "./components/radio/radio.vue";
	import VCheckbox from "./components/checkbox/checkbox.vue";
	import VProcessor from "./components/processor/processor.vue";
	import VTextarea from "./components/textarea/textarea.vue";
	import VSelect from "./components/select/select.vue";
	import VUpload from "./components/upload/upload.vue";
	import VTab from "./components/tab/tab.vue";
	import VCalendar from "./components/calendar/calendar.vue";
	import VChart from "./components/chart/chart.vue";

	import util from "./utils/util.js";

	// 在vue底层会将组件配置Object转化成构造函数，因此每次render的vnode都是新的实例
	let componentMap = new Map([
		["input", VInput],
		["button", VButton],
		["submit", VButton],
		["container", VContainer],
		["form", VContainer],
		["modal", VContainer],
		["table", VTable],
		["radio", VRadio],
		["checkbox", VCheckbox],
		["processor", VProcessor],
		["textarea", VTextarea],
		["select", VSelect],
		["text", VText],
		["upload", VUpload],
		["tab", VTab],
		["calendar", VCalendar],
		["pie", VChart],
		["ring", VChart],
		["line", VChart],
		["bar", VChart],
		["graph", VChart],
		["chart", VChart]
	]);

	function isChart(component) {
		return (
			component === "chart" ||
			component === "pie" ||
			component === "ring" ||
			component === "line" ||
			component === "bar" ||
			component === "graph"
		);
	}

	// 避免template中的if/else导致的文件长度过长、可读性下降问题，已key-value结构存储对应组件
	function getRealComponent(componentName) {
		let component = componentName;
		// 默认是text组件
		return componentMap.get(component) ? componentMap.get(component) : VText;
	}

	// 从JSON配置生成具体组件render的data对象
	// 传给具体组件前，对对象进行一定的前置处理
	function getRenderData(context = {}) {
		let originDataProps = (context.data || {}).props
				? context.data.props
				: context,
			isArrayValueComponent =
				originDataProps.component === "table" ||
				originDataProps.component === "checkbox" ||
				isChart(originDataProps.component);

		// 缺省补全
		!originDataProps.attributes && (originDataProps.attributes = {});
		!originDataProps.events && (originDataProps.events = {});
		!originDataProps.validity && (originDataProps.validity = {});

		// 目前看，JSON配置的绝大多数选项放到props里就可以了，但可以过滤、校验、处理一些其他参数,
		// directives、scopedSlots、根据组件的不同有不同设置
		let _data = {
			// 安装基础属性
			props: {
				id: originDataProps.id || util.getUid(), // 必须要有id
				name: originDataProps.name,
				extra: originDataProps.extra,
				hide: originDataProps.attributes.hide,
				disabled: originDataProps.attributes.disabled,
				readonly: originDataProps.attributes.readonly,
				wraperClass: originDataProps.attributes.class,
				animated: originDataProps.attributes.animated,
				style: originDataProps.attributes.style,
				clickEventName: originDataProps.attributes.clickEventName,
				suffixClickEventName:
					originDataProps.attributes.suffixClickEventName,
				changeEventName: originDataProps.attributes.changeEventName,
				dblClickEventName: originDataProps.attributes.dblClickEventName,
				placeholder: originDataProps.attributes.placeholder,
				resetable: originDataProps.attributes.resetable,
				help: originDataProps.attributes.help,
				helpIcon: originDataProps.attributes.helpIcon,
				suffix: originDataProps.attributes.suffix,
				labelWidth: originDataProps.attributes.labelWidth,
				required: originDataProps.validity.required,
				format: originDataProps.validity.format,
				max: originDataProps.validity.max,
				min: originDataProps.validity.min,
				label: originDataProps.label,
				value: util.isDefined(originDataProps.value)
					? originDataProps.value
					: isArrayValueComponent
					? []
					: "",
				change: originDataProps.events.change,
				items: originDataProps.items || [],
				_validityErrorMessage: originDataProps._validityErrorMessage,
				_tableData: originDataProps._tableData,
				_parentContainerAttributes:
					originDataProps._parentContainerAttributes || {}
			}
		};

		// 安装个性属性
		util.addPropsByComponent(
			originDataProps.component || "text",
			originDataProps,
			_data.props
		);

		return _data;
	}

	// 对于item，要考虑的是组合关系，将decoration解析为其他组件并以具名slot形式传入实际组件的render函数
	function getDecorationChildren(createElement, decoration) {
		let _children = [];
		if (Array.isArray(decoration) && decoration.length > 0) {
			_children = decoration.map(item => {
				return genContainerVnode(createElement, item);
			});
		}

		return _children;
	}

	function genContainerVnode(
		createElement,
		config = {},
		parentAttributes,
		tableData
	) {
		if (
			Object.prototype.toString.call(parentAttributes) ===
				"[object Object]" &&
			Object.keys(parentAttributes).length > 0
		) {
			config._parentContainerAttributes = parentAttributes;
		}
		// 若item自身_tableData为空，则继承父组件的_tableData
		if (
			!(
				Object.prototype.toString.call(config._tableData) ===
					"[object Object]" && Object.keys(config._tableData).length > 0
			)
		) {
			config._tableData = tableData;
		}
		return createElement(
			getRealComponent(config.component),
			Object.assign({}, getRenderData(config), {
				slot: (config.attributes || {}).placement
			}),
			config.items
				? config.items.map(item =>
						genContainerVnode(
							createElement,
							item,
							Object.assign(
								parentAttributes || {},
								config.attributes
							),
							config._tableData || {}
						)
				  )
				: []
		);
	}

	export default {
		name: "VItem",
		functional: true,
		// VItem作为函数中转组件，负责在传递并返回具体组件前，对数据进行一定的处理，如校验、格式化等
		// 负责将field的具体各项进行验证，传给真实组件的应为处理过的分解props
		// 获取当前页面顶层注入的依赖
		render: function(createElement, context) {
			let isTableItem = false;

			if (!context.data || !context.data.props) {
				// table中显式引用item组件，配置信息被存放在data.attrs中
				context.data.props = context.data.attrs.props || {};
				isTableItem = true;
			}

			let childVnodes = context.children || [];
			// tableItem里面的组件items也需要根据config执行render生成vnode
			if (isTableItem) {
				let tableItemItems = context.data.props.items,
					tableItemVnodes = null;

				if (
					isTableItem &&
					Array.isArray(tableItemItems) &&
					tableItemItems.length > 0
				) {
					tableItemVnodes = tableItemItems.map(item => {
						return genContainerVnode(
							createElement,
							item,
							item.attributes,
							context.data.props._tableData
						);
					});
				}

				childVnodes = childVnodes.concat(tableItemVnodes);

				if (Array.isArray(context.data.props.decoration)) {
					context.data.props.decoration.forEach(decorationObj => {
						decorationObj._tableData = context.data.props._tableData;
					});
				}
			}

			childVnodes = childVnodes.concat(
				getDecorationChildren(createElement, context.data.props.decoration)
			);

			return createElement(
				getRealComponent(context.data.props.component),
				getRenderData(context), // slot-scoped
				childVnodes
			);
		},
		components: {
			VInput,
			VContainer,
			VButton,
			VTable,
			VText,
			VRadio,
			VCheckbox,
			VProcessor,
			VTextarea,
			VSelect,
			VUpload,
			VTab,
			VCalendar,
			VChart
		}
	};
</script>
