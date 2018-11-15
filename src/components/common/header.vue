
<style lang="sass">
	@import '../../assets/scss/common.scss';
</style> 



<template>
	<div class='header'>
		<a class='logo' href="/">
			<img src="../../assets/img/commonImg/logo.png" alt="">
		</a>
		<div class="nav_switch" @click='nav_switch()'>
			<i class="iconfont icon-daohang" :class='{hide: navSwitch}'></i>
			<i class="iconfont icon-guanbi" :class='{hide: !navSwitch}'></i>
		</div>
		<!-- 导航组件 -->
		<commonNav ref="navIsShow" v-on:parentSwitch="nav_switch"></commonNav>
		<!-- 返回顶部组件 -->
		<backTop></backTop>
	</div>
</template>

<script src='../../assets/js/header.js'></script>
