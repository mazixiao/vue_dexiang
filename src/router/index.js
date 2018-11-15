import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import threeNav from '@/components/threeNav/threeNav'
import fourNav from '@/components/fourNav/fourNav'
import fiveNav from '@/components/fiveNav/fiveNav'
import about from '@/components/about/about'
import join from '@/components/join/join'
import sale from '@/components/sale/sale'
import videoItem from '@/components/videoItem/videoItem'
import newsItem from '@/components/newsItem/newsItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'index',
		component: index,
		meta: {
			title: '德祥首页'
		},     
    },
    {
		path: '/threeNav',
		name: 'threeNav',
		component: threeNav,
		meta: {
			title: '三级导航'
		},    
    },  
    {
		path: '/threeNav/fourNav',
		name: 'fourNav',
		component: fourNav,
		meta: {
			title: '四级导航'
		},    
    }, 
    {
		path: '/threeNav/fourNav/fiveNav',
		name: 'fiveNav',
		component: fiveNav,
		meta: {
			title: '五级导航'
		},    
    },   
    {
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			title: '关于我们'
		},    
    }, 
    {
		path: '/join',
		name: 'join',
		component: join,
		meta: {
			title: '加入我们'
		},    
    },
    {
		path: '/sale',
		name: 'sale',
		component: sale,
		meta: {
			title: '售后服务'
		},    
    }, 
    {
		path: '/videoItem',
		name: 'videoItem',
		component: videoItem,
		meta: {
			title: '视频点播'
		},    
    }, 
    {
		path: '/newsItem',
		name: 'newsItem',
		component: newsItem,
		meta: {
			title: '新闻列表'
		},    
    },                    
  ]
})
