
// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'

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
					tit: 'DNA/RNA'
				},
				{
					tit: '细胞/血液'
				},	
				{
					tit: '代谢组学'
				},			
			]
		}
	},
	methods: {

	}
}