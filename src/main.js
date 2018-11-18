// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 字体图标
import './assets/font/iconfont.css'


// rem手淘适配
// import common1 from './assets/js/vendor/flexible_css.debug.js'  
import common2 from './assets/js/vendor/flexible.debug.js'  
// Vue.prototype.common1 = common1
// Vue.prototype.common2 = common2
// Vue.use(common1)
Vue.use(common2)


/*引入资源请求插件*/
import axios from 'axios';

/*使用axios插件*/
Vue.prototype.$axios = axios;

// 多语言切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
	// 语言标识
	locale: 'cn', 
	messages: {
		'cn': require('./assets/js/lang/cn'),
		'en': require('./assets/js/lang/en')
	}
})


// 设置网页title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')


router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	console.log(to, 'to');
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
