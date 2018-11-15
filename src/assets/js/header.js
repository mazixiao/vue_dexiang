
import commonNav from '../../components/common/nav'
import backTop from '../../components/common/backTop'

// header
export default {
	name: 'commonHeader',
	components: {
		commonNav,
		backTop
	},
	data() {
		return {
			navSwitch: false,
		}
	},
	methods: {
		nav_switch() {
			this.navSwitch = !this.navSwitch;
			//返回的是一个vue对象，所以可以直接调用其方法
			// console.log(this.$refs.navIsShow); 
			this.$refs.navIsShow.navShow(); 
		}
	}
}



