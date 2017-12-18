<template>
  <div>
      <div class="top">
         <div class="logo">
           <img src="./../assets/img/logo.png" alt="">
         </div>
         <div class="menu">
            <a href="#" class="one"  title="首页">首页</a>
            <a href="#" class="two" title="所有下午茶">所有下午茶</a>
            <a href="#" class="three"  title="新鲜水果">新鲜水果</a>
            <a href="#" class="four"  title="零食干果">零食干果</a>
            <a href="#" class="six" title="精美饮品">精美饮品</a>
            <a href="#" class="seven" title="蛋糕糕点">蛋糕糕点</a>
            <div class="search">
              <a href="#" class="pic"><img src="./../assets/img/search.png" alt=""></a>
            </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
     
    }
  }
}
</script>

<style leng="sass" scoped>
  .top{
    width:1200px;
    height:159px;
    margin: 0 auto;
  }
 .logo {
    text-align: center;
 }
 .top .menu{
  height: 25px;
  padding: 19px;
  text-align: center;
 }
 .top .menu a{
  font-size: 24px;
  color: green;
  margin: 0 auto;
  text-align: center;
  padding: 27px;
 }
  .top .menu .search img{
    position: relative;
    left: 497px;
    bottom: 42px;
  }
</style>
