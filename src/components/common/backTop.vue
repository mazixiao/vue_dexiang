
<style lang='sass'>
	@import '../../assets/scss/common.scss';
</style>

<template>
	<div class="backTop" v-show='isHidden' @click='toTop(step)'>
	    <img src="../../assets/img/commonImg/top.png" alt="">
	</div>
</template>

<script>
    export default{
    	name: 'backTop',
    	components: {

    	},
        props:{
            step: {   //此数据是控制动画快慢的
                type: Number,
                default: 70  
            }
        },
        data() {
            return {
                isHidden: false,
            }
        },
        methods: {
            toTop(step){
                //参数i表示间隔的幅度大小，以此来控制速度
                document.documentElement.scrollTop -= step; //(兼容)
                document.body.scrollTop -= step; //(兼容)
                if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
                    var time = setTimeout(() => this.toTop(step),16);
                }else {
                    clearTimeout(time);
                };
            },
        },
        created(){
        	// 返回顶部按钮默认隐藏
        	var that = this;
            window.onscroll = function() {
                if (document.documentElement.scrollTop > 60 || document.body.scrollTop > 60) {
                    that.isHidden = true;
                }else {
                    that.isHidden = false;
                }
            }
        }       
    }
</script>
