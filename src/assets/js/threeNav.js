
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'


// icon
import icon1 from '../img/industryApplicationImg/icon2.png'
import icon9 from '../img/industryApplicationImg/icon9.png'
import icon3 from '../img/industryApplicationImg/icon3.png'
import icon4 from '../img/industryApplicationImg/icon4.png'
import icon5 from '../img/industryApplicationImg/icon5.png'
import icon6 from '../img/industryApplicationImg/icon6.png'
import icon7 from '../img/industryApplicationImg/icon7.png'
import icon8 from '../img/industryApplicationImg/icon8.png'
import icon2 from '../img/industryApplicationImg/icon1.png'
import icon10 from '../img/industryApplicationImg/icon10.png'
import icon11 from '../img/industryApplicationImg/icon11.png'

// nav
export default {
	name: 'threeNav',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
	},
	data() {
		return {
			con: [
				{
					icon: icon1,
					text: '生命科学'
				},
				{
					icon: icon9,
					text: '样品前处理'
				},					
				{
					icon: icon3,
					text: '生物化学'
				},	
				{
					icon: icon4,
					text: '化工'
				},
				{
					icon: icon5,
					text: '食品安全'
				},	
				{
					icon: icon6,
					text: '环境'
				},	
				{
					icon: icon7,
					text: '制药'
				},	
				{
					icon: icon8,
					text: '法医'
				},	
				{
					icon: icon2,
					text: '材料'
				},
				{
					icon: icon10,
					text: '石油化工'
				},
				{
					icon: icon11,
					text: '实验室'
				},											
			]
		}
	},
	methods: {

	}
}