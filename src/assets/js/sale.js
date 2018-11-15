
import { XInput, Group, Selector, Alert, XTextarea } from 'vux'

// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'


import introductImg from '../../assets/img/afterSaleImg/qaq.png'




// nav
export default {
	name: 'sale',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
		XInput,
		Group,
		Selector,
		Alert,
		XTextarea 
	},
	data() {
		return {
			introduct: {
				tit: '德祥为您提供完善的售后服务',
				con: '经过近20年的努力，德祥公司一直致力于供应和维护您所信赖的仪器，是公认的“行业第一”。现已拥有一队富有激情、高度专业化的售后服务团队，每年都为数以千计的客户提供全方位、高效的、及时维修服务的技术支持。我们在国内设有专门的技术支持服务中心，在全国共建有3个样机实验室。只要您选择了德祥的产品和服务，将持续享受真正的本地化模式服务保障体系。',
				img: introductImg,
			},
			option1: [
				{key: 'item1', value: '产品求购'}, 
				{key: 'item2', value: '售后服务'},
				{key: 'item3', value: '意见与建议'},
				{key: 'item4', value: '报名参会'},
			],
			option2: [
				{key: 'item1', value: '制药'}, 
				{key: 'item2', value: '农业'},
				{key: 'item3', value: '食品饮料'},
				{key: 'item4', value: '环境'},
				{key: 'item5', value: '生命科学'},
				{key: 'item6', value: '石油化工'},
				{key: 'item7', value: '电子和半导体'},
				{key: 'item8', value: '机械工业'},
				{key: 'item9', value: '高分子和材料'},
				{key: 'item10', value: '医疗和法医'},
				{key: 'item11', value: '其他'},
			],
			option3: [
				{key: 'item1', value: '政府机关'}, 
				{key: 'item2', value: '公共事业'},
				{key: 'item3', value: '高校/科研院所'},
				{key: 'item4', value: '工业'},
				{key: 'item5', value: '企业'},
				{key: 'item6', value: '其他'},
			],
			select1: null,
			select2: null,
			select3: null,
			company: null,
			username: null,
			phone: null,
			email: null,
			textarea: null,
			alert1: false,
			alert2: false,
			alert3: false,
			alert4: false,
			alert5: false,
			alert6: false,
			alert7: false,
			alert8: false,
			alertok: false,
			datas: ''
		}
	},
	mounted() {

	},
	methods: {
	    // 号码验证
	    checkPhone(telephone) {
	        if(!(/^(0\d{2,3}-?)?\d{7,8}$/.test(telephone)) && !(/^1[34578]\d{9}$/.test(telephone))){
	            return false;
	        }
	        return telephone;
	    },
		// 邮箱认证
		checkEmail(email) {
		  var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		  if (!re.test(email)) {
		      return false;
		  }
		  return email;
		}, 

		commit() {
			if(this.select1 === null) {
				this.alert1 = true;
				return;
			};
	        if (this.company === null || this.company === '') {
	            this.alert2 = true;
	            return;
	        };
			if(this.select2 === null) {
				this.alert3 = true;
				return;
			};
			if(this.select3 === null) {
				this.alert4 = true;
				return;
			};
	        if (this.username === null || this.username === '') {
	            this.alert5 = true;
	            return;
	        };
	        if (!this.checkPhone(this.phone)) {
	            this.alert6 = true;
	            return;
	        };
	        if (!this.checkEmail(this.email)) {
	            this.alert7 = true;
	            return;
	        };
	        if (this.textarea === null || this.textarea === '') {
	            this.alert8 = true;
	            return;
	        };

	    	var item1 = this.$refs['defaultValueRef1'].getFullValue()[0]['value'];
	    	var item2 = this.company;
	    	var item3 = this.$refs['defaultValueRef2'].getFullValue()[0]['value'];
	    	var item4 = this.$refs['defaultValueRef3'].getFullValue()[0]['value'];
	    	var item5 = this.username;
	    	var item6 = this.phone;
	    	var item7 = this.email;
	    	var item8 = this.textarea;
	    	this.datas =
	    	'留言类型' + ': ' +  item1 + '<br>' +
	    	'单位名称' + ': ' + item2 + '<br>' +
	    	'所属行业' + ': ' + item3 + '<br>' +
	    	'职能' + ': ' + item4 + '<br>' +
	    	'姓名' + ': ' + item5 + '<br>' +
	    	'电话' + ': ' + item6 + '<br>' +
	    	'邮箱' + ': ' + item7 + '<br>' +
	    	'问题描述' + ':' + item8
			this.alertok = true;
		}
	}
}		
