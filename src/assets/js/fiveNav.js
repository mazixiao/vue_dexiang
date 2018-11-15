
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'



// 图片
import img1 from '../../assets/img/cellImg/item1.jpg'
import img2 from '../../assets/img/cellImg/item2.jpg'
import img3 from '../../assets/img/cellImg/item3.jpg'
import img4 from '../../assets/img/cellImg/item4.jpg'

// nav
export default {
	name: 'fourNav',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
	},
	data() {
		return {
			con: [
				{
					img: img1,
					text: 'DNA/RNA/蛋白质浓缩纯化'
				},
				{
					img: img2,
					text: 'DNA/RNA'
				},	
				{
					img: img3,
					text: 'DNA/蛋白质浓缩纯化'
				},	
				{
					img: img4,
					text: '蛋白质浓缩纯化'
				},		
			]
		}
	},
	methods: {

	}
}