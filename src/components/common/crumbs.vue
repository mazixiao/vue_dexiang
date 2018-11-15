
<!-- 面包屑 -->
<style lang='sass'>
	@import '../../assets/scss/common.scss';
</style>

<template>
	<div class="crumbs">
        <router-link :to="{path:'/'}">首页</router-link>
        <i> > </i>
        <router-link :to="{path:'/'}">首页</router-link>
        <i> > </i>
        <router-link :to="{path:'/'}">首页</router-link>
        <i> > </i>
	</div>
</template>

<script>
    export default{
    	name: 'crumbs',
    	components: {

    	},
        props:{

        },
        data() {
            return {
     
            }
        },
        methods: {

        },
        created(){

        }       
    }
</script>
