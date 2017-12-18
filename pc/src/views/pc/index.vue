<template>
	<div>
    <top></top>
    <lunbo></lunbo>   
    <mainPIC></mainPIC>
    <bottom></bottom>
	</div>
</template>

<script>
import top  from '@/components/top.vue';
import bottom from '@/components/bottom.vue';
import lunbo from '@/components/lunbo.vue';
import mainPIC from '@/components/mainPIC.vue';
export default {

  name: 'index',

  data () {
    return {

    }          
  },
  mounted() {
  },
  components: {
    top,
    bottom,
    lunbo,
    mainPIC
  }
}
</script>

<style lang="sass" scoped>
</style>