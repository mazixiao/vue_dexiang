
<style lang='sass'>
	@import '../../assets/scss/join.scss';
</style>

<template>
	<div class="join">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
		<div class="banner">
			<img src="../../assets/img/joinImg/banner.jpg" alt="">
			<!-- <div class="text">{{this.$route.query.banner}}</div> -->
		</div>


		<div class="contentss">
			<div class="left_nav">
				<div class="tit">加入我们</div>
				<div class="con">
					<a class="item" @click='tab(index)' :class='{active:index == tabHighlight}' href="javascript:;" v-for='(item, index) in joinTit'>
						<div class="item_con">
							<div class="round"></div>
							<div class="text">{{item}}</div>
						</div>
					</a>
				</div>
			</div>

		  
			<div class="right_con" v-for='(item, index) in joinCon' v-show="index == tabHighlight">
				<div class="tit">{{item.tit}}</div>
				<div class="con">
					<div class="item">
						<div class="one" @click='controlShow()'>
							<div class="left">{{item.occupation}}</div>
							<div class="right" v-show='!isShow'>+</div>
							<div class="right" v-show='isShow'>-</div>
						</div>
						<div class="two" v-show='isShow'>
							<div class="require">    
								<div class="item_ss">学历：{{item.degree}}</div>
								<div class="item_ss">地区：{{item.region}}</div>
							</div>
							<div class="duty" v-html='item.duty'>
														
							</div>
							<a class="need" href="javascript:;">在线申请<i>></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>


		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/join.js'></script>