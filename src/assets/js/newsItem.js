
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'

// 引用组件
import commonHeader from '../../components/common/header'
import commonFooter from '../../components/common/footer'
import crumbs from '../../components/common/crumbs'




// nav
export default {
	name: 'newsItem',
	components: {
		commonHeader,
		commonFooter,
		crumbs,
		Scroller,
		Divider,
		Spinner,
		XButton,
		Group,
		Cell,
		LoadMore

	},
	data() {
		return {
			// ajax容器
			ajaxData: [],
			// 页码
			pageToken: 1,
			onFetching: false,

		}
	},
	//在模板渲染之前调用(ajax越早越好)
	created() {
		this.sendAjax()
	}, 
	mounted() {

	},
	methods: {
	    sendAjax() {
	      // 页码(初始第一页)
	      var pageToken = this.pageToken;
	      // 这里就是刚才的config/index.js中的/api
	      var urlItem  = '/api/news/qihoo?kw=%E7%99%BD&pageToken=' + pageToken + '&site=qq.com&apikey=WyPef4FMI79FqgPyB6zbdhhDxNyLTnn2MX4d1cJUHRi3G0UpefWIfwb5fqfDBQfw'; 
	      this.$axios.get(urlItem)
	      .then((response) => { //使用箭头函数防止this为undefined
	        this.ajaxData = this.ajaxData.concat(response.data.data);
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	    },


    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
        	// alert(this.pageToken);
          this.bottomCount += 10;
	      this.pageToken += 1;
	      this.sendAjax();
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },

	}
}		
