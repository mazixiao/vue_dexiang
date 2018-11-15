


// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'


import big1 from '../../assets/img/videoImg/video1.jpg'
import big2 from '../../assets/img/videoImg/video2.jpg'


// nav
export default {
	name: 'sale',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
	},
	data() {
		return {
			video1: [
				{
					bigImg: big1,
					text: '冻干设备的选择以及在纳米药物制剂中的应用',
					videoSrc: 'https://tegent.oss-cn-hangzhou.aliyuncs.com/sp.mp4'
				},
				{
					bigImg: big2,
					text: 'GeneVac在制药领域中样品浓缩和干燥的自动化应用',
					videoSrc: 'https://tegent.oss-cn-hangzhou.aliyuncs.com/genevac.mp4'
				},
			],
			videoShow: false,
			videoSrc: '',
		}
	},
	mounted() {

	},
	methods: {
		// 开启视频
		playVideo(src) {
			this.videoShow = true;
			this.videoSrc = src;
		},
		// 关闭视频
		hideVideo() {
			this.videoShow = false;
			this.videoSrc = '';
		}
	}
}		
