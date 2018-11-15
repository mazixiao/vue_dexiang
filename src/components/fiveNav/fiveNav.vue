
<style lang='sass'>
	@import '../../assets/scss/fiveNav.scss';
</style>

<template>
	<div class="fiveNav">
		<commonHeader></commonHeader>
		<crumbs class='small_nav'></crumbs>


		<div class="contentss">
			<div class="title_s">{{this.$route.query.banner}}</div>
			<div class="con_item">
				<a class="item" href="javascript:;" v-for='(item, index) in con'>
					<div class="item_s">
						<div class="img">
							<img :src="item.img" alt="">
						</div>
						<div class="text">{{item.text}}</div>
					</div>
				</a>
			</div>
		</div>
		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/fiveNav.js'></script>