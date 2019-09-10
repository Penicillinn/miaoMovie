<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="wrapper">
        <div class="input">
          <i class="iconfont icon-sousuo icon"></i>
          <input type="text" placeholder="请输入搜索内容" class="sousuo">
        </div>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  name : 'search',
  data () {
    return {
    };
  },

}
</script>
<style  scoped>
@import url('../../../static/font/iconfont.css');
.search{
  position: absolute;
  width: 100%;
  top:94px;
  left: 0;
  bottom: 0;
}
.wrapper{
  height: 50px;
  background-color: #f9f9f9;
}
.input{
  line-height: 50px;
  text-align: center;
  position: relative;
}
.sousuo{
  height: 30px;
  padding: 0 10px 0 30px;
}
.icon{
  position: absolute;
  left: 75px;
}
</style>