
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'






// nav
export default {
	name: 'join',
	components: {
		commonHeader,
		commonFooter,
		crumbs
	},
	data() {


		return {
			tabHighlight: 0,
			isShow: false,
			joinTit: ['东区', '北区', '西南区'],
			joinCon: [
				{
					tit: '东区',
					occupation: '销售工程师（高校,企业方向）',
					degree: '本科',
					region: '上海',
					duty: '任职要求<br>1、本科以上学历，专业方向：化学分析、材料等相关专业<br>2、一年以上工作经验，有高校，研究所等单位业务经验者优先<br>3、性格外向、开朗、活泼、积极、上进；<br>4、人际关系良好，善于沟通、有团队合作精神。<br>5、敬业、忠诚可靠<br>6、热爱销售工作，且具备做销售的素质，即热爱挑战、富有激情、勤奋、吃苦耐劳。职位职责<br>1.  积极推动负责产品的销售工作，完成销售任务<br>2.  与相关部门合作，进行市场开发，参与并组织技术交流活动<br>3.  建立并维护良好的客户关系<br>4.  对合同从签定后到完结各环节跟踪、负责，与经理、工程师及商务人员保持良好的沟通公司为员工提供完善的福利制度：税后薪资、五险一金、商业保险、法定节假日、年假、带 薪病假、话费和饭费补贴、出差补助、每年一次体检、每年一次旅游城市旅游等。对销售人员提供丰厚的，有竞争力的奖金制度。简历投递：hr@tegent.com.cn',
				},
				{
					tit: '北区',
					occupation: '销售工程师',
					degree: '本科',
					region: '上海',
					duty: '任职要求<br>1、本科以上学历，专业方向：化学分析、材料等相关专业'
				},
				{
					tit: '西南区',
					occupation: '销售工程师',
					degree: '本科',
					region: '上海',
					duty: '任职要求<br>1、本科以上学历，专业方向：化学分析、材料等相关专业'
				}
			]
		}
	},
	mounted() {

	},
	methods: {
      tab(index) {
          this.tabHighlight = index;
          this.isShow = false;
      },
      controlShow() {
      	this.isShow = !this.isShow;
      }
	}
}