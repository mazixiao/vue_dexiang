<style lang="sass">
	@import '../../assets/scss/index.scss';
</style> 

<template>
	<div class="index">
		<commonHeader></commonHeader>
		<swiper class='swiper' loop auto  :interval='3000' :duration='1500' :aspect-ratio="0.72" dots-position="center">
			<swiper-item class="swiper_item" v-for='(item, index) in swiper' :key='index'>
				<img :src="item[0]" alt="">
				<div class='info'>
					<div class="text1 fadeInUp animated">{{item[1]}}</div>
					<div class="text2 fadeInUp animated">{{item[2]}}</div>
					<a class="more" v-if='item[3] == true' href="javascript:;">
						<span>查看更多</span>&gt;
					</a>
				</div>
			</swiper-item>
		</swiper>

		<div class="industry_application">
			<div class="title">行业应用</div>
			<div class="industry">
				<div class="industrys">
					<a class="item" :class='{willHidden: index > 5 && isHidden }' href="javascript:;" v-for='(item, index) in industrys'>
						<div class="icon">
							<img :src="item.img" alt="">
						</div>
						<div class="text">{{item.text}}</div>
					</a>
				</div>
				<div class="flexible" @click='willHidden()'>
					<span class="plus" v-if='isHidden'>+</span>
					<span class="plus" v-if='!isHidden'>-</span>
					<span v-if='isHidden'>查看全部</span>
					<span v-if='!isHidden'>收起</span>
				</div>
			</div>

			<div class="agency">
				<div class="text">
					<div class="one">我们设有 <span class="counter1">22</span> 个办事处和销售点（含越南）<span class="counter1">4</span> 个区域性维修中心及配件库
					公司业务包含仪器代理，维修售后，自主产品研发生产销售售后</div>
				</div>
				<div class="map">
					<!-- 手机端地图 -->
					<img class="phone_map" :src="map.phoneMap" alt="">
					<div class="phone_office">
						<div class="item_s" :class='{willHidden: index > 0 && isHidden2}' v-for='(item, index) in map.phone_office'>
							<div class="tit_s">{{item.tit_s}}</div>
							<div class="con_s">
								<span v-for='(list, indexs) in item.con'>{{list}}</span>
							</div>
						</div>
						<div class="flexible" @click='willHidden2()'>
							<span class="plus" v-show='isHidden2'>+</span>
							<span class="plus" v-show='!isHidden2'>-</span>
							<span class="text" v-show='isHidden2'>展开全部</span>
							<span class="text" v-show='!isHidden2'>收起</span>
						</div>
					</div>
				</div>

				<div class="service">
					<div class="tit">售后服务</div>
					<div class="small_tit">
						<span class="counter1">3</span>个样机实验室，<span class="counter1">30</span>多名维修工程师，维修点覆盖深圳，青岛，西安，杭州，南京，苏州，长沙，成都，安徽，昆明，南宁，厦门等<span class="counter1">12</span>个城市。                
					</div>
					<div class="introduce">
						<div class="item" v-for='(item, index) in introduce'>
							<div class="con">
								<div class="one">{{item.one}}</div>
								<div class="two">{{item.two}}</div>
								<a class="three" href="javascript::">
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



		<div class="company_news">
			<div class="tit">{{company_news.tit}}</div>
			<ul>
				<li v-for='(item, index) in company_news.con'>
					<a class="con" href="javascript:;">
					<div class="img">
						<span>Loading</span>
						<!-- <img :src="item.img" alt=""> -->
						<x-img :src="item.img"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>

					</div>


      



					<div class="text">{{item.text}}</div>
					<div class="date">
						<div class="dates">
							<span class="month">{{item.date.month}}</span>
							<span class="year">{{item.date.year}}</span>
						</div>
					</div>
					</a>
				</li>
			</ul>
		</div>
		<commonFooter></commonFooter>
	</div>
</template>

<script src='../../assets/js/index.js'></script>




