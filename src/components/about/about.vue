
<style lang='sass'>
	@import '../../assets/scss/about.scss';
</style>

<template>
	<div class="about">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
		<div class="banner">
			<img src="../../assets/img/aboutImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div>
		<div class="contentss">
			<div class="introduct">
				<div class="right">
					<div class="one">{{introduct.one}}</div>
					<div class="two" v-html='introduct.two'></div>
				</div>
				<div class="left">
					<img :src="introduct.introductImg" alt="">
				</div>
			</div>
		</div>
		<div class="development">
			<div class="tit">{{development.bigTit}}</div>
			<swiper class='swipers' loop auto :interval='3000' :duration='1500' :aspect-ratio="0.72" dots-position="center">
				<swiper-item class="swiper_item" v-for='(item, index) in development.swiper' :key='index'>
					<div class="text1" v-html='item.tit'></div>
					<div class="text2" v-html='item.con'></div>
				</swiper-item>
			</swiper>
		</div>
		<div class="contact">
			<div class="tit">联系我们</div>
			<div class="con">
				<a class="item" href="tel:4009 000 900">
					<div class="item_con">
						<div class="left">
							<i class="iconfont icon-dianhua1"></i>
						</div>
						<div class="right">
							<div class="one">电话</div>
							<div class="two">4009 000 900</div>
						</div>
					</div>
				</a>
				<a class="item" href="mailto:info@tegent.com.cn">
					<div class="item_con">
						<div class="left">
							<i class="iconfont icon-youxiang"></i>
						</div>
						<div class="right">
							<div class="one">邮箱</div>
							<div class="two">info@tegent.com.cn</div>
						</div>
					</div>
				</a>
				<a class="item" href="javascript:void(0);">
					<div class="item_con">
						<div class="left">
							<i class="iconfont icon-dizhi"></i>
						</div>
						<div class="right">
							<div class="one">总部</div>
							<div class="two">香港观塘巧明街100号友邦九龙大楼36楼3605室</div>
						</div>
					</div>
				</a>				
			</div>
		</div>
		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/about.js'></script>