<template>
	<div class="bottom">
		<img src="./../assets/img/bottom.jpg" alt="">
		<div class="gray">
			<div class="word">
				<div class="biaoti">定制贵公司精美下午茶</div>
				<div>联系电话：0755-84766344 </div>
				<div>手机：13548349554 </div>
				<div>地址：深圳南山科技园二号</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{

			}
		}

	}
</script>
<style scoped>
	.bottom{
		width:1200px;
    	height:390px;
    	background-color:yellow;
    	 margin: 0 auto;
	}
	.bottom .gray{
		width: 588px;
	    height: 202px;
	    background-color:#00000042;
	    position: relative;
	    left: 475px;
	    bottom: 315px;
	}
	.bottom .gray .word{
		color: #fff;
	    font-size: 24px;
	    font-weight: 900;
	    padding: 10px 25px;
	}
	.bottom .gray .word .biaoti{
		font-size: 50px;
	}
</style>