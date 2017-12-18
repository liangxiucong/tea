<template>
	 <Carousel v-model="value1" loop :autoplay="true">
        <CarouselItem>
            <div class="demo-carousel">
				<img src="./../assets/img/lunbo.jpg" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
				<img src="./../assets/img/lunbo.jpg" alt="">
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
	export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
<style scoped>
	
</style>