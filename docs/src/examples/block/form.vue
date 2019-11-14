<script>
	import WeComponents from "../../../../src/"; // 引入组件库

	let pageFields = [
		{
			component: "container",
			items: [
				{
					component: "form",
					attributes: { layout: "row", flexJustify: "space-between" },
					items: [
						{
							name: "search",
							label: "搜索框",
							component: "input",
							attributes: { placeholder: "输入游戏名称进行搜索" }
						},
						{
							label: "查询",
							component: "submit",
							attributes: {
								type: "primary",
								clickEventName: "searchTable"
							}
						}
					]
				},
				{
					id: "list",
					component: "table",
					attributes: { placeholder: "暂无数据", pagination: "default" },
					items: [
						{ name: "name", label: "游戏名称" },
						{
							name: "price",
							label: "价格",
							attributes: { textAlign: "right" },
							value(v, row) {
								return `¥ ${v.toFixed(2)}`;
							}
						},
						{
							name: "score",
							label: "评分",
							attributes: { textAlign: "right" }
						},
						{ name: "intro", label: "游戏介绍" },
						{
							label: "操作",
							name: "opts",
							value() {
								return {
									component: "container",
									items: [
										{
											label: "查看",
											component: "button",
											attributes: {
												type: "link",
												clickEventName: "checkDetails"
											}
										}
									]
								};
							}
						}
					],
					value: []
				}
			]
		},
		{
			id: "details",
			component: "modal",
			label: "游戏详情",
			attributes: { hide: true },
			items: [
				{
					label: "游戏名称",
					name: "name"
				},
				{
					label: "价格",
					name: "price"
				},
				{
					label: "评分",
					name: "score"
				},
				{
					label: "游戏介绍",
					name: "intro"
				}
			]
		}
	];

	export default {
		data() {
			return {
				// 初始化组件库
				page: new WeComponents(this, pageFields),
				demoTableValue: [
					{
						name: "怪物猎人世界",
						price: 388,
						score: 97,
						intro: "猛汉王"
					},
					{
						name: "尼尔机械纪元",
						price: 528,
						score: 98,
						intro: "废土世界的人工智能"
					}
				]
			};
		},
		mounted() {
			this.page.setValue("list", this.demoTableValue);
		},
		methods: {
			searchTable(event) {
				let formData = event.data,
					tableValue = this.demoTableValue.filter(
						item => item.name.indexOf(formData.search) > -1
					);

				this.page.setValue("list", tableValue);
			},
			checkDetails(event) {
				let currentRowValue = event.data.row;
				this.page.setValue("details", currentRowValue);
				this.page.show("details");
			}
		}
	};
</script>
