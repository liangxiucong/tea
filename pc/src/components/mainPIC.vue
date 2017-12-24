<template>
	<div>
		<div class="container-1200">
			<div class="xuanchuan">
				<div class="left">
					<img src="../assets/img/pic12.png" alt="">
				</div>
				<div class="right">
					<p class="pp1">电话24小时在线，请拨打...</p>
					<div>
						<div class="left2">
							<img src="../assets/img/dianhua.png" class="p1">
							<img src="../assets/img/shouji.png" class="p2">
						</div>
						<div class="right">
							<p class="pp2">0755-98743283</p>
							<p class="pp3">13738239445</p>
						</div>
					</div>	
				</div>
			</div>
			<div class="word">
				<p class="w1">发现最新鲜的</p>
				<p class="w2">GET FRESH</p>
			</div>
			<div class="pic">
				<Row>
	        		<i-col span="12" class='left'>
	        			<Row>
					        <i-col span="12">
					        	<img src="../assets/img/pic1.png" alt="">
					        </i-col>
					        <i-col span="12">
					        	<img src="../assets/img/pic2.png" alt="">
					        </i-col>
	    				</Row>
						<Row>
					        <i-col span="12">
					        	<img src="../assets/img/pic11.png" alt="">
					        </i-col>
					        <i-col span="12">
					        	<img src="../assets/img/pic3.png" alt="">
					        </i-col>
	    				</Row>
	        		</i-col>
	        		<i-col span="12" class='right'>
	        			<img src="../assets/img/pic4.png" alt="">
	        		</i-col>
	   			 </Row>
			</div>
			<div class="kong"></div>
			<div class="pic2">
				<Row>
					<i-col span="12" class='left'>
	        			<img src="../assets/img/pic5.png" alt="">
	        		</i-col>
	        		<i-col span="12" class='right'>
	        			<Row>
					        <i-col span="12">
					        	<img src="../assets/img/pic6.png" alt="">
					        </i-col>
					        <i-col span="12">
					        	<img src="../assets/img/pic7.png" alt="">
					        </i-col>
	    				</Row>
						<Row>
					        <i-col span="12">
					        	<img src="../assets/img/pic11.png" alt="">
					        </i-col>
					        <i-col span="12">
					        	<img src="../assets/img/pic8.png" alt="">
					        </i-col>
	    				</Row>
	        		</i-col>
	   			 </Row>
			</div>
			<div class="kong2"></div>
			<div class="pic3">
				<Row>
			        <i-col span="12" class="left">
			        	<img src="../assets/img/pic9.png" alt="">
			        </i-col>
			        <i-col span="12" class="right">
			        	<img src="../assets/img/pic10.png" alt="">
			        </i-col>
   				 </Row>
			</div>
			<div class="kong3"></div>
		</div>
	</div>
</template>
<script>
	
</script>
<style leng="sass" scoped>
	.container-1200{
		width: 1200px;
		margin: 0 auto;
	}
	.xuanchuan{
		width: 600px;
	    height: 160px;
	    background-color: #74944ccf;
	    position: relative;
	    bottom: 60px;
	    left: 260px;
	}
	.xuanchuan .left2 .p1,.p2{
		width: 35px;
		height: 35px;
		position: absolute;
		left: 211px;
	}
	.xuanchuan .left2 .p1{
		top: 70px;
	}
	.xuanchuan .left2 .p2{
		top: 110px;
	}
	.xuanchuan .right .pp1,.pp2,.pp3{
		position: absolute;
		left: 211px;
		color: #fff;
		font-weight: 900;
		padding-left: 50px;
	}
	.xuanchuan .right .pp1{
		top:20px;
		font-size: 20px;
	}
	.xuanchuan .right .pp2{
		top:70px;
		font-size: 27px;
	}
	.xuanchuan .right .pp3{
		top:110px;
		font-size: 27px;
	}
	.word .w1{
		font-size: 40px;
		text-align: center;
		color: black;
		letter-spacing: 50px;
	}
	.word .w2{
		text-align: center;
        font-size: 30px;
        color: #80808085;
        padding-bottom: 40px;
	}
	.pic .right img{
		width: 100%;
		padding-top: 4px;
		padding-left: 8px;
	}
	.kong,.kong2,.kong3{
		height: 100px;
		background-color: #fff;
	}
	.pic3 .left img{
		width: 100%;
		height: 395px;
    	width: 600px;
    	padding-right: 10px;
	}
	.pic3 .right img{
		padding-left: 4px;
    	width: 598px;
	}
</style>