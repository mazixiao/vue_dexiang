<style lang='sass'>
	@import '../../assets/scss/common.scss';
</style>

<template>
	<div class="nav" :class='{hide:!navIsShow}'>
		<div class="shadow" v-if='navIsShow' @click='parentSwitch()'></div>
		<div class="navss">
			<div class="nav_con">
				<div class="oneHierarchy" v-for='(item1, index1) in navss'>
					<div class="hierarchy1_tit clearfix" @click='twoHierarchyControl(index1)'>
	                    <router-link :class='{cover: !item1.children}' :to="{path:item1.link,query: {banner: item1.title}}" tag="a">{{item1.title}}</router-link>
	                    <i class="iconfont icon-arrow-down" v-show='item1.children' :class='{overturn:index1 === twoHierarchy && status1 == index1}'></i>
					</div>
					<div class="twoHierarchy" v-if='index1 === twoHierarchy && status1 == index1' v-for='(item2, index2) in item1.children'>
						<div class="hierarchy2_tit clearfix" @click='threeHierarchyControl(index2)'>
		                    <!-- <a href="javascript:;">{{item2.title}}</a> -->

    					<router-link :class='{cover: !item2.children}' :to="{path:item2.link, query: {banner: item2.title}}" tag="a">{{item2.title}}</router-link>

		                    <i class="iconfont icon-arrow-down" v-show='item2.children' :class='{overturn:index2 === threeHierarchy && status2 == index2}'></i>
						</div>
						<div class="threeHierarchy" v-if='index2 === threeHierarchy && status2 == index2' v-for='(item3, index3) in item2.children'>
							<div class="hierarchy3_tit clearfix" @click='fourHierarchyControl(index3)'>
			                    <router-link :class='{cover: !item3.children}' :to="{path:item3.link, query: {banner: item3.title}}" tag="a">{{item3.title}}</router-link>
			                    <i class="iconfont icon-arrow-down" v-show='item3.children' :class='{overturn:index3 === fourHierarchy && status3 == index3}'></i>
							</div>	
							<div class="fourHierarchy" v-if='index3 === fourHierarchy && status3 == index3' v-for='(item4, index4) in item3.children'>
								<div class="hierarchy4_tit clearfix">
				                    <router-link :class='{cover: !item4.children}' :to="{path:item4.link, query: {banner: item4.title}}" tag="a">{{item4.title}}</router-link>
				                    <!-- v-show='item2.children' -->
				                    <i class="iconfont icon-arrow-down" v-show='item4.children'></i>
								</div>	
							</div>								
						</div>														
					</div>									
				</div>
			</div>
			<div class="three_header">
				<div class="right clearfix">
					<div class="search">
						<input type="text" placeholder="搜索">
						<a href="javascript:;">
							<img src="../../assets/img/commonImg/search.png" alt="">
						</a>
					</div>
					<div class="member">
						<a href="javascript:;">登录</a>
						<a href="javascript:;">注册</a>
					</div>
					<a href="javascript:;" class="english">
						<i class="iconfont icon-1diqiu"></i>
						<span>English</span>
					</a>
				</div>
			</div>
		</div>
	</div>

</template>

<script src='../../assets/js/nav.js'></script>