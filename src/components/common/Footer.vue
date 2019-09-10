<template>
  <div class="footer"> 
    <ul class="footer-list">
      <router-link to="/movie" tag="li" class="footer-item" :class="{'active':$route.path.split('/')[1] === 'movie'}">
        <i class="iconfont icon-dianying icon"></i>
        <p class="text">电影</p>
      </router-link>
      <router-link to="/cinema" tag="li" class="footer-item" :class="{'active':$route.path.split('/')[1] === 'cinema'}">
        <i class="iconfont icon-yingyuan icon"></i>
        <p class="text">影院</p>
      </router-link>
      <router-link to="/mine" tag="li" class="footer-item" :class="{'active':$route.path.split('/')[1] === 'mine'}">
        <i class="iconfont icon-wode icon"></i>
        <p class="text">我的</p>
      </router-link>
    </ul>
  </div> 
</template>
<script>
export default {
  name : 'Footer',
  data () {
    return {
    };
  },

}
</script>
<style  scoped>
@import url('../../../static/font/iconfont.css');
.footer{
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  border-top: 2px solid #ebe8e3 ;
  z-index: 99;
  background-color: white;
}
.footer-list{
  display: flex;
}
.footer-item{
  flex: 1;
  text-align: center;
}
.footer-item .icon{
  font-size: 20px;
  line-height: 30px;
}
.text{
  font-size: 12px;
}
.active{
  color:#ef4238;
}
</style>