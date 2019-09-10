<template>
  <div class="cinema"> 
   <!-- 头部 -->
  <Header title="喵喵影院"></Header>
  <!-- navbar -->
  <ul class="cinema-list">
    <router-link to="/cinema/allcity" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/cinema/allcity' }">
      <span class="location">全城</span>
      <i class="iconfont icon-lower-triangle"></i>
    </router-link>
    <router-link to="/cinema/grand" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/cinema/grand' }">
      <span class="location">品牌</span>
      <i class="iconfont icon-lower-triangle"></i>
    </router-link>
    <router-link to="/cinema/feature" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/cinema/feature' }">
      <span class="location">特色</span>
      <i class="iconfont icon-lower-triangle"></i>
    </router-link>
  </ul>
  <!-- 内容区 -->
  <router-view/>

  <!-- 底部 -->
  <Footer></Footer>
  </div> 
</template>
<script>
import Header from '../common/Head'
import Footer from '../common/Footer'
export default {
  name : 'cinema',
  data () {
    return {
    };
  },
  components:{ Header,Footer }

}
</script>
<style  scoped>
@import url('../../../static/font/iconfont.css');
.cinema-list{
  position: relative;
  top: 50px;
  left: 0;
  display: flex;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
}
.navbar-item{
  flex: 1;
  text-align: center;
  padding: 0 10px;
  line-height: 44px;
}
.location{
  font-size: 16px;
}
.active{
  color:#ef4238 ;
  border-bottom: 2px solid #ef4238;
}
</style>