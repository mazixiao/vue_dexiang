
<style lang='sass'>
	@import '../../assets/scss/newsItem.scss';
</style>

<template>
	<div class="newsItem">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
		<div class="contentss">
			<div class="tit">新闻动态</div>
		    <scroller lock-x height="480px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="480">
				<div class="newsDetail">
					<div class="item" v-if="ajaxData" v-for="(item, index) in ajaxData" :key='index'>
						<a class='tit_s' target="_blank" :href="item.url">{{index + 1}}.{{item.title}}</a>
						<div class="introduct">{{item.content}}</div>
						<div class="img">
							<a class='imgs' :href='imgs' target="_blank" v-for="(imgs, index1) in item.imageUrls" :key='index1' :style="{'background-image': 'url(' + imgs + ')'}"></a>
						</div>
						<div class="source">
							<div class="time">{{item.publishDateStr}}</div>
							<div class="author">作者：{{item.posterScreenName}}</div>
						</div>
					</div>
					<load-more tip="loading"></load-more>
				</div>
		    </scroller>
		</div>
		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/newsItem.js'></script>