<template>
  <div> 
    <!-- 头部 -->
    <Header title="喵喵电影"></Header>
    <!-- navbar -->
    <ul class="navbar">
      <router-link to="/movie/citylist" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/movie/citylist' }">
        <span class="location">大连</span>
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <router-link to="/movie/nowplay" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/movie/nowplay' }">
        <span class="nowplay">正在热映</span>
      </router-link>
      <router-link to="/movie/coming" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/movie/coming' }">
        <span class="coming">即将上映</span>
      </router-link>
      <router-link to="/movie/search" tag="li" class="navbar-item" :class="{ 'active':$route.path === '/movie/search' }">
        <i class="iconfont icon-sousuo icon"></i>
      </router-link>
    </ul>
    <!-- 内容 -->
    <router-view></router-view>

    <!-- footer -->
    <Footer></Footer>
  </div> 
</template>
<script>
import Header from '../common/Head'
import Footer from '../common/Footer'
export default {
  name : 'Movie',
  data () {
    return {
    };
  },
  components:{ Header,Footer },
  created(){
    // console.log(this.$route.path.split('/'))
  }

}
</script>
<style  scoped>
@import url('../../../static/font/iconfont.css');
.navbar{
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
.nowplay,.coming{
  font-size: 15px;
  font-weight: 700;
  /* color: #666666; */
}
.icon{
  font-size: 24px;
  color: #ef4238;
}
.active{
  color:#ef4238 ;
  border-bottom: 2px solid #ef4238;
}
</style>