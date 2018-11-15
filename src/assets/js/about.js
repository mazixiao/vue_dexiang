
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'
import { Swiper, SwiperItem } from 'vux'


import introductImg from '../../assets/img/aboutImg/jianjie.jpg'


// nav
export default {
	name: 'about',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
		Swiper,
		SwiperItem
	},
	data() {
		return {
			introduct: {
				one: '德祥简介',
				two: '自1992年创办以来，德祥就一直是科学仪器行业内颇受尊敬的优质供应商。<br>实验室分析仪器、工业检测仪器及过程控制设备是德祥主营的产品，现已覆盖高校、科研院所、政府组织、检验机构及工业、企业等客户，涵盖制药、石化、食品饮料和电子等各个行业。&nbsp;<br>“科学技术能为我们的客户带来高品质的生活”，这是德祥人的信仰，我们也以此为仪器行业、整个社会乃至我们所生存的世界带来价值。<br>我们拥有专业、富有激情的团队来管理产品并为客户提供优质的服务，例如产品技术支持和试验室解决方案。我们倡导健康生活，快乐工作；真诚待人，正直处事；开放心态，诚信经营的理念，并致力于发展每一位员工成为最优秀德祥人。我们相信，我们正在使这个世界变得更美好。',
				introductImg: introductImg,
			},
			development: {
				bigTit: '发展历程',
				swiper: [
					{
						tit: '1992',
						con: '德祥成为安捷伦公司（从惠普公司分立）在中国南区的授权经销商'
					},
					{
						tit: '1997',
						con: '成都办事处成立'
					},	
					{
						tit: '2003',
						con: '广州办事处与中山大学成立联合实验室'
					},
					{
						tit: '2005',
						con: '青岛办事处成立<br>大连办事处成立'
					},												
				]				
			}
		}
	},
	methods: {

	}
}