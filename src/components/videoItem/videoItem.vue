
<style lang='sass'>
	@import '../../assets/scss/videoItem.scss';
</style>

<template>
	<div class="videoItem">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
		<div class="banner">
			<img src="../../assets/img/videoImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div>


		<div class="contentss">
			<div class="video_con">
				<a class="item" @click='playVideo(item.videoSrc)' v-for='(item, inde) in video1' href="javascript:void(0);" :data-src="item.videoSrc">
					<div class="left">
						<img class="big" :src="item.bigImg" alt="">
						<img class="small" src="../../assets/img/videoImg/zanting1.png" alt="">
					</div>
					<div class="right">{{item.text}}</div>
				</a>
			</div>	
		</div>

	    <div class="video_play" v-show='videoShow'>
	        <div class="shadow" @click='hideVideo()'></div>
	        <video id='videoss' autoplay controls :src="videoSrc"></video>
	    </div>



		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/videoItem.js'></script>