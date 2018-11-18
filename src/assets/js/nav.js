
// nav
export default {
	name: 'commonNav',
	data() {
		return {
			navss: [
				{
					title: '应用与产品',
					id: '1',
					children: [
						{
							title: '行业应用',
							id: '1-1',
							link: '/threeNav',
							children: [
								{
									title: '生命科学',
									id: '1-1-1',
									link: '/threeNav/fourNav',
									children: [
										{
											title: 'DNA/RNA',
											id: '1-1-1-1',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '细胞/血液',
											id: '1-1-1-2',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '代谢组学',
											id: '1-1-1-3',
											link: '/threeNav/fourNav/fiveNav',
										}																				
									]
								},
								{
									title: '样品前处理',
									id: '1-1-2',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '提纯',
											id: '1-1-2-1',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '溶剂回收',
											id: '1-1-2-2',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '浓缩和干燥',
											id: '1-1-2-3',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '萃取',
											id: '1-2-2-4',
											link: '/threeNav/fourNav/fiveNav',
										},																
									]
								},	
								{
									title: '生物化学',
									id: '1-1-3',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '前处理',
											id: '1-1-3-1',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '保存',
											id: '1-1-3-2',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '分析',
											id: '1-1-3-3',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '形态观察',
											id: '1-1-3-4',
											link: '/threeNav/fourNav/fiveNav',
										}																												
									]
								},
								{
									title: '化工',
									id: '1-1-4',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '分析',
											id: '1-1-4-1',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '化学反应',
											id: '1-1-4-2',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '前处理',
											id: '1-1-4-3',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '提纯',
											id: '1-1-4-4',
											link: '/threeNav/fourNav/fiveNav',
										}																				
									]
								},	
								{
									title: '食品安全',
									id: '1-1-5',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '风味分析',
											id: '1-1-5-1',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '农残测定前处理',
											id: '1-1-5-2',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '农残测定',
											id: '1-1-5-3',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '包装材料',
											id: '1-1-5-4',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '提纯',
											id: '1-1-5-5',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '氨基酸',
											id: '1-1-5-6',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '蛋白质含量测定',
											id: '1-1-5-7',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '总脂肪含量测定',
											id: '1-1-5-8',
											link: '/threeNav/fourNav/fiveNav',
										},	
										{
											title: '3-MCPD（3-单氯丙二醇）和缩水甘油检测',
											id: '1-1-5-9',
											link: '/threeNav/fourNav/fiveNav',
										}																			
									]
								},	
								{
									title: '环境',
									id: '1-1-6',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '空气',
											id: '1-1-6-1',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '土壤',
											id: '1-1-6-2',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '水',
											id: '1-1-6-3',
											link: '/threeNav/fourNav/fiveNav',
										}																																
									]
								},
								{
									title: '制药',
									id: '1-1-7',
									link: '/threeNav/fourNav',
									children: [
										{
											title: '生物制药',
											id: '1-1-7-1',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '针剂',
											id: '1-1-7-2',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '颗粒，粉末',
											id: '1-1-7-3',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '片剂，胶囊，栓剂',
											id: '1-1-7-4',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '纯化',
											id: '1-1-7-5',
											link: '/threeNav/fourNav/fiveNav',
										},
										{
											title: '包装',
											id: '1-1-7-6',
											link: '/threeNav/fourNav/fiveNav',
										}																				
									]
								},																																																												
							]
						},
						{
							title: '品牌分类',
							id: '1-2',
							link: '/threeNav',
							children: [
								{
									title: 'Gerstel',
									id: '1-2-1',
								},
								{
									title: 'SP',
									id: '1-2-2',
								},
								{
									title: 'Hettich',
									id: '1-2-3',
								},								
							]  
						},
						{
							title: '仪器分类',
							id: '1-3',
							link: '/threeNav',
							children: [
								{
									title: '分析仪器',
									id: '1-3-1',
									children: [
										{
											title: '感官分析设备',
											id: '1-3-2',
										},
										{
											title: '光谱仪',
											id: '1-3-3',
										},
										{
											title: '色谱',
											id: '1-3-4',
										}
									]
								},
								{
									title: '冷冻干燥设备',
									id: '1-3-2',
									children: [
										{
											title: '冻干机',
											id: '1-3-2-1',
										}
									]
								},
								{
									title: '实验室',
									id: '1-3-3',
									children: [
										{
											title: '前处理平台',
											id: '1-3-3-1',
										},
										{
											title: '热脱附仪',
											id: '1-3-3-2',
										},
										{
											title: '分离萃取设备',
											id: '1-3-3-3',
										},
										{
											title: '纯化设备',
											id: '1-3-3-4',
										}										
									]
								}																
							]
						},
						{
							title: '耗材分类',
							id: '1-4',
							link: '/threeNav',
						}						
					]
				},
				{
					title: '关于德祥',
					id: '2',
					children: [
						{
							title: '关于我们',
							id: '2-1',
							link: '/about',
						},
						{
							title: '新闻动态',  
							id: '2-2',
							link: '/newsItem',
						},
						{
							title: '加入我们',
							id: '2-3',
							link: '/join',
						}												
					]
				},
				{
					title: '售后服务',
					id: '3',
					link: '/sale',
				},
				{
					title: '德祥课堂',
					id: '4',
					children: [
						{
							title: '视频点播',
							id: '4-1',
							link: '/videoItem',
						},
						{
							title: '解决方案',
							id: '4-2',
						},						
					]
				}
				// {
				// 	title: '测试结构一级',
				// 	children: [
				// 		{
				// 			title: '测试结构二级',
				// 			children: [
				// 				{
				// 					title: '测试结构三级',
				// 					children: [
				// 						{
				// 							title: '测试结构四级',
				// 						}
				// 					]
				// 				}
				// 			]
				// 		}					
				// 	]
				// }																	
			],
			//导航默认隐藏
			navIsShow: false,
			// 控制二级导航显示与隐藏
			twoHierarchy: null,
			status1: null,
			// 控制三级导航显示与隐藏
			threeHierarchy: null,
			status2: null,
			// 控制四级导航显示与隐藏
			fourHierarchy: null,
			status3: null,	
			navCon: null,
			// 语言切换
			langs: 'English'		
		}
	},
	methods: {
		navShow() {
			this.navIsShow = !this.navIsShow;
		},
		//点击遮罩调用父组件的关闭导航方法
		parentSwitch() {
			this.$emit('parentSwitch');
		},
		twoHierarchyControl(index1) {
			this.twoHierarchy = index1;
			if(this.status1 !== index1) {
				this.status1 = index1
			} else {
				this.status1 = null
			};
		},
		threeHierarchyControl(index2) {
			this.threeHierarchy = index2;
			if(this.status2 !== index2) {
				this.status2 = index2
			} else {
				this.status2 = null
			};
		},
		fourHierarchyControl(index3) {
			this.fourHierarchy = index3;
			if(this.status3 !== index3) {
				this.status3 = index3
			} else {
				this.status3 = null
			};
		},
		changeLang () {
			// 增加传入语言
			if(this.$i18n.locale=='cn') {
				this.langs='中文';
				this.$i18n.locale='en';
			} else {
				this.langs='English';
				this.$i18n.locale='cn';
			};
			// window.location.reload();
		},
		//a标签跳转链接后刷新
　　　　flushCom() {
　　　　　　//router是路由实例,例如:var router = new Router({})
　　　　　　//router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，
			//0就表示还是当前，类似window.history.go(n)
　　　　　　this.$router.go(0);  
　　　　}
	},
	mounted() {

	},
	created() {

	}
}