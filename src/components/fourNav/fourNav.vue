
<style lang='sass'>
	@import '../../assets/scss/fourNav.scss';
</style>

<template>
	<div class="fourNav">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
<!-- 		<div class="small_nav">
			<router-link :to="{path:'/'}">首页</router-link>
			<i> > </i>
			<span>{{this.$route.query.one}}二级</span>
			<i> > </i> 	
			<router-link :to="{path:'/threeNav'}">{{this.$route.query.two}}三级</router-link>
			<i> > </i> 			
			<router-link :to="{path:'/threeNav/fourNav'}">{{this.$route.query.three}}四级</router-link>
		</div> -->
		<div class="banner">
			<img src="../../assets/img/materialImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div>


		<div class="contentss">
			<router-link class="item" :to="{path:'/threeNav/fourNav/fiveNav'}" v-for='(item, index) in con' :key='index'>
				<img class="bg" src="../../assets/img/materialImg/item_bg.jpg" alt="">
				<div class="cons">
					<div class="left">{{item.tit}}</div>
					<div class="right">
						<i class="iconfont icon-arrow-right"></i>
					</div>
				</div>
			</router-link>
		</div>
		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/fourNav.js'></script>