
<style lang='sass'>
	@import '../../assets/scss/sale.scss';
</style>

<template>
	<div class="sale">
		<commonHeader></commonHeader>
		<crumbs></crumbs>
		<div class="banner">
			<img src="../../assets/img/afterSaleImg/banner.jpg" alt="">
			<div class="text">{{this.$route.query.banner}}</div>
		</div>


		<div class="contentss">
			<div class="introduct">
				<div class="left">
					<div class="one" v-html='introduct.tit'></div>
					<div class="two" v-html='introduct.con'></div>
				</div>
				<div class="right">
					<img :src='introduct.img' alt="">
				</div>
			</div>
		</div>
		<div class="four_item">
			<div class="item_con">
	            <a href="javascript:;">
	            	<img class="big" src="../../assets/img/afterSaleImg/item1.jpg" alt="">
	            	<div class="small_con">
						<img class="small" src="../../assets/img/afterSaleImg/small1.png" alt="">
						<div class="text">IQ/OQ认证</div>
	            	</div>
	            </a>
	            <a href="javascript:;">
					<img class="big" src="../../assets/img/afterSaleImg/item2.jpg" alt="">
	            	<div class="small_con">
						<img class="small" src="../../assets/img/afterSaleImg/small2.png" alt="">
						<div class="text">操作手册</div>
	            	</div>
	            </a>
	            <a href="javascript:;">
					<img class="big" src="../../assets/img/afterSaleImg/item3.jpg" alt="">
	            	<div class="small_con">
						<img class="small" src="../../assets/img/afterSaleImg/small3.png" alt="">
						<div class="text">安装和培训</div>
	            	</div>
	            </a>
	            <a href="javascript:;">
					<img class="big" src="../../assets/img/afterSaleImg/item4.jpg" alt="">
	            	<div class="small_con">
						<img class="small" src="../../assets/img/afterSaleImg/small4.png" alt="">
						<div class="text">维修和售后合约服务</div>
	            	</div>
	            </a>
			</div>
		</div>

		<div class="application">
			<div class="tits">开始您的售后申请</div>
		    <group>
		      <selector placeholder="请选择留言类型" v-model="select1" title="留言类型" name="select1" :options="option1" ref="defaultValueRef1"></selector>
		    </group>
			<alert v-model="alert1" :title='"请选择留言类型"'></alert>
			
			<group title="">
				<x-input id='company' title="单位名称" name="company" placeholder="请输入单位名称" v-model.trim='company'></x-input>
			</group>
			<alert v-model.trim="alert2" :title='"请输入单位名称"'></alert>

		    <group>
		      	<selector placeholder="请选择所属行业" v-model="select2" title="所属行业" name="select2" :options="option2" ref="defaultValueRef2"></selector>
		    </group>
			<alert v-model="alert3" :title='"请选择所属行业"'></alert>

		    <group>
		      	<selector placeholder="请选择职能" v-model="select3" title="职能" name="select3" :options="option3" ref="defaultValueRef3"></selector>
		    </group>
			<alert v-model="alert4" :title='"请选择职能"'></alert>

			<group title="">
				<x-input id='username' title="姓名" name="username" placeholder="请输入姓名" v-model.trim='username'></x-input>
			</group>
			<alert v-model="alert5" :title='"请输入姓名"'></alert>

			<group title="">
				<x-input id='phone' title="电话" name="username" placeholder="请输入电话" v-model='phone'></x-input>
			</group>
			<alert v-model="alert6" :title='"请输入正确的电话格式"'></alert>

			<group title="">
				<x-input id='email' title="邮箱" name="username" placeholder="请输入邮箱" v-model='email'></x-input>
			</group>
			<alert v-model="alert7" :title='"请输入正确的邮箱格式"'></alert>

			<group>
				<x-textarea :max="100" :placeholder="'问题描述'" v-model.trim="textarea"></x-textarea>
			</group>
			<alert v-model="alert8" :title='"问题描述不能为空"'></alert>

			<alert v-model="alertok" :title='"提交成功"'></alert>


			<div class="commit">
			    <a id="commit" @click='commit()' href="javascript:;">提交</a>
			</div>

		</div>
		<div style='font-size: 20px' v-html='datas'></div>

		<commonFooter></commonFooter>
	</div>
</template>


<script src='../../assets/js/sale.js'></script>