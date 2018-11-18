
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import { Swiper, SwiperItem, XImg } from 'vux'

// 图片
import swiper1 from '../img/indexImg/phone_kv1.jpg'
import swiper2 from '../img/indexImg/phone_kv2.jpg'
import swiper3 from '../img/indexImg/phone_kv3.jpg'

//引入cookie
import Cookies from 'js-cookie'
// Vue.use(Cookies)

// 行业应用icon
import use1 from '../img/indexImg/use1.png'
import use2 from '../img/indexImg/use2.png'
import use3 from '../img/indexImg/use3.png'
import use4 from '../img/indexImg/use4.png'
import use5 from '../img/indexImg/use5.png'
import use6 from '../img/indexImg/use6.png'
import use7 from '../img/indexImg/use7.png'
import use8 from '../img/indexImg/use8.png'
import use9 from '../img/indexImg/use9.png'
import use10 from '../img/indexImg/use10.png'
import use11 from '../img/indexImg/use11.png'

//手机端地图
import phoneMap from '../img/indexImg/phone_map.jpg'

//企业资讯
import companyNews1 from '../../assets/img/indexImg/info1.jpg'
import companyNews2 from '../../assets/img/indexImg/info2.jpg'
import companyNews3 from '../../assets/img/indexImg/info3.jpg'



export default {
	name: 'index',
	components: {
		commonHeader,
		commonFooter,
		Swiper,
		SwiperItem,
		XImg
	},
	data () {
		return {
			msg: 'Welcome to Your Vue.js Appnnn',  
			swiper: [
				[
					swiper1,
					'基于气质联用食品检测标准方法ISO18363-1,AOCS Cd29c-13,DGF C-VI18(10)',
					'全自动检测食用油中的3-MCPD和缩水甘油',
					true
				], 
				[
					swiper2,
					'您不忍错过的试用活动',
					'总有一款适合您',
					true
				], 
				[
					swiper3,
					'',
					'',
					false
				] 
			],
			industrys: [
				{
					img: use1,
					text: '生命科学',
				},
				{
					img: use2,
					text: '样品前处理',
				},
				{
					img: use6,
					text: '生物化学',
				},
				{
					img: use2,
					text: '化工',
				},	
				{
					img: use3,
					text: '食品安全',
				},
				{
					img: use7,
					text: '环境',
				},	
				{
					img: use4,
					text: '制药',
				},	
					{
					img: use9,
					text: '法医',
				},	
				{
					img: use5,
					text: '材料',
				},
				{
					img: use10,
					text: '石油化工',
				},
				{
					img: use11,
					text: '实验室',
				}			
			],
			isHidden: true,
			isHidden2: true,
			map: {
				phoneMap: phoneMap,
				phone_office: [
					{
						tit_s: '总部',
						con: [
							'香港九龙观塘巧明街100号友邦',
							'九龙大楼36楼05室',
							'Tel: (852) 3910 1500',
							'Fax: (852) 2758 3830',
						]
					},
					{
						tit_s: '北京办事处',
						con: [
							'北京市海淀区知春路9号',
							'坤讯大厦603室 (100191)',
							'Tel: (010) 8232 7383',
							'Fax: (010) 8232 9551',
						]
					},
					{
						tit_s: '上海办事处',
						con: [
							'上海市长宁区天山路1717号',
							'SOHO天山广场T2-1002室',
							'Tel: (021) 5261 0159',
							'Fax: (021) 5261 0122',
						]
					},	
					{
						tit_s: '广州办事处',
						con: [
							'广州市中山五路219号',
							'中旅商业城1505室 (510030)',
							'Tel: (020) 2227 3388',
							'Fax: (020) 2227 3368',
						]
					}									
				]
			},
			introduce: [
				{
					one: '安装',
					two: '为客户提供新机安装、调试；旧机升级、搬迁、重装等',
				},
				{
					one: '认证',
					two: '为仪器设备进行IQ / OQ认证、年检、校正',
				},
				{
					one: '培训',
					two: '为操作者提供机器使用培训、日常维护指引',
				},
				{
					one: '配套',
					two: '为客户提供配件，标品，耗材等',
				},
			],
			company_news: {
				tit: '企业资讯',
				con: [
					{
						img: companyNews1,
						text: '德祥展台大揭秘，好礼干货甩不停！',
						date: {
							month: '10.16',
							year: '2018',
						}
					},	
					{
						img: companyNews2,
						text: '您的国庆大礼已到位 | 明星产品试用风暴席卷！',
						date: {
							month: '09.30',
							year: '2018',
						}
					},
					{
						img: companyNews3,
						text: '前方预告！Gerstel在慕尼黑生化分析展',
						date: {
							month: '09.21',
							year: '2018',
						}
					},		
				]
			}
		}
	},
	methods: {
	    // icon是否全部显示
	    willHidden() {
	    	this.isHidden = !this.isHidden;
	    },
	    willHidden2() {
	    	this.isHidden2 = !this.isHidden2;
	    },
	    success (src, ele) {
	      console.log('success load', src)
	      const span = ele.parentNode.querySelector('span')
	      ele.parentNode.removeChild(span)
	    },
	    error (src, ele, msg) {
	      console.log('error load', msg, src)
	      const span = ele.parentNode.querySelector('span')
	      span.innerText = 'load error'
	    },	    	    	    
	  },	
	mounted () {

	}, 
}
