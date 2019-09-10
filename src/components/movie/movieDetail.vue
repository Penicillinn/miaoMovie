<template>
  <div class="movie-detail"> 
    <!-- 头部 -->
    <Head title="电影详情">
      <span slot="left" class="back" @click="goBack">
       返回
      </span>

    </Head>
    <!-- 图片区域 -->
    <div class="img-wrapper">
      <img width="108" height="150" class="pic" src="http://p0.meituan.net/128.180/movie/0772ff70aafc57e0005535d4d7c93b112720771.jpg"/>
      <div class="detail">
        <p class="title">罗小黑战记</p>
        <p class="text">The Legend of Hei</p>
        <p class="text">9.4</p>
        <p class="text">动画,动作,奇幻</p>
        <p class="text">101分钟</p>
        <p class="text">2019-09-07大陆上映</p>
      </div>
      <div class="bg">
        <img width="100%" height="100%" src="http://p0.meituan.net/128.180/movie/0772ff70aafc57e0005535d4d7c93b112720771.jpg"/>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="desc">
        <p class="txt">在熙攘的人类世界里，很多妖精隐匿其中，他们与人类相安无事地生活着。猫妖罗小黑因为家园被破坏，开始了它的流浪之旅。这场旅途中惺惺相惜的妖精同类与和谐包容的人类伙伴相继出现，让小黑陷入了两难抉择，究竟何处才是真正的归属？</p>
      </div>
      <div class="weiper" ref="swiper">
        <div ref="box">
          <ul class="img-list">
            <li class="img-item" v-for="item in imglist" :key="item.$index">
                <img width="150" height="90" src="http://p1.meituan.net/140.127/movie/591b41c94f952f1625ea4916e40b8afd660473.jpg"/>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div> 
</template>
<script>
import BScroll from 'better-scroll'
import Head from '../common/Head'
export default {
  name : 'movieDetail',
  data () {
    return {
      imglist:[1,2,3,4]
    };
  },
  components:{ Head },
  created(){
    this.$nextTick(()=>{
      this.imgScroll = new BScroll(this.$refs.swiper,{
        scrollX:true,
        evevtPassthrough:"vertical"
      })
    })
  },
  mounted(){
    this.$refs.box.style.width = 160*this.imglist.length + "px"
  },
  methods:{
    goBack(){
      this.$router.back(-1)
    }
  }

}
</script>
<style  scoped>
@import url('../../../static/font/iconfont.css');
.img-wrapper{
  position: relative;
  top: 50px;
  left: 0;
  display: flex;
  padding: 15px 0 15px 15px;
  overflow: hidden;
  background-color: rgba(233, 237, 241, 0.1);
}
.back{
  float: left;
}
.pic{
  flex: 0 0 108px;
  border: 1px solid #f0f2f3;
}
.detail{
  flex: 1;
  padding-top: 10px;
  padding-left: 15px;
}
.title{
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
}
.text{
  font-size: 14px;
  color: black;
  line-height: 23px;
}
.bg{
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(10px);
}
.content{
  position: relative;
  top: 50px;
}
.desc{
  padding: 10px ;
}
.txt{
  font-size: 15px;
  line-height: 25px;
}
.weiper{
  position: absolute;
  top: 145px;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.img-list{
  display: flex;
}
.img-item{
  margin-left: 15px;
}
</style>