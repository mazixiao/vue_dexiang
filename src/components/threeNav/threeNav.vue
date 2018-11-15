
<style lang='sass'>
	@import '../../assets/scss/threeNav.scss';
</style>

<template>
	<div class="threeNav">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
<!-- 		<div class="small_nav">
			<router-link :to="{path:'/'}">首页</router-link>
			<i> > </i>
			<span>{{this.$route.query.one}}二级</span>
			<i> > </i> 	
			<router-link :to="{path:'/threeNav'}">{{this.$route.query.two}}三级</router-link>
		</div> -->
		<div class="banner">
			<img src="../../assets/img/industryApplicationImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div>




		<div class="contentss">
			<router-link class="item" :to="{path:'/threeNav/fourNav'}" v-for='(item, index) in con' :key='index'>
				<div class="cons">
					<div class="left">
						<img class="shows" :src="item.icon" alt="">
					</div>
					<div class="middle">{{item.text}}</div>
					<div class="right"> 
						<i class="iconfont icon-arrow-right"></i>
					</div>
				</div>
			</router-link>
		</div>











		<p style='font-size: 50px'>我是三级导航</p>


		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/threeNav.js'></script>