
<style lang='sass'>
	@import '../../assets/scss/newsItem.scss';
</style>

<template>
	<div class="newsItem">
		<commonHeader></commonHeader>
<!-- 		<crumbs></crumbs>
		<div class="banner">
			<img src="../../assets/img/videoImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div> -->



		新闻列表
<!-- 		<div class="newsDetail2">
			<div class="item" v-if="ajaxData" v-for="(item, index) in ajaxData" :key='index'>
				<a class='tit_s' target="_blank" :href="item.url">{{item.title}}</a>
				<div class="introduct">{{item.content}}</div>
				<div class="img">
					<a :href='imgs' target="_blank" v-for="(imgs, index1) in item.imageUrls" :key='index1' :style="{'background-image': 'url(' + imgs + ')'}"></a>
				</div>
				<div class="source">
					<div class="time">{{item.publishDateStr}}</div>
					<div class="author">作者：{{item.posterScreenName}}</div>
				</div>
			</div>
		</div> -->



    <!-- <divider> </divider> -->
    <scroller lock-x height="300px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="400">
      <div class="box2">
        <!-- <p v-for="i in bottomCount">placeholder {{i}}</p> -->
		<div class="newsDetail2">
			<div class="item" v-if="ajaxData" v-for="(item, index) in ajaxData" :key='index'>
				<a class='tit_s' target="_blank" :href="item.url">{{item.title}}</a>
				<div class="introduct">{{item.content}}</div>
				<div class="img">
					<a :href='imgs' target="_blank" v-for="(imgs, index1) in item.imageUrls" :key='index1' :style="{'background-image': 'url(' + imgs + ')'}"></a>
				</div>
				<div class="source">
					<div class="time">{{item.publishDateStr}}</div>
					<div class="author">作者：{{item.posterScreenName}}</div>
				</div>
			</div>
		</div>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>



		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/newsItem.js'></script>