<template>
  <div class="allcity" ref="cinema"> 
    <div class="allcity-wrapper">
      <ul class="cinema-list">
        <li class="cinema-item" v-for="item in cinemaList " :key="item.id">
         <div>
          <div class="title">
            <div class="name"><span >{{ item.nm }}</span></div>
            <div>
              <span class="price">{{ item.sellPrice}}</span>
              <span class="text">元起</span>
            </div>
          </div>
          <div class="location">
            <span class="addr">{{ item.addr }}</span>
            <span>{{ item.distance }}</span>
          </div>
          <div class="card" v-if="item.tag.snack || item.tag.sell">
            <div class="card-item" v-if="item.tag.snack">
              <span>小吃</span>
            </div>
            <div class="card-item" v-if="item.tag.sell">
              <span>折扣卡</span>
            </div>
          </div>
         </div>
        </li>
      </ul>
    </div>
  </div> 
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name : 'allcity',
  data () {
    return {
      cinemaList:[]
    };
  },
  created(){
    const cinema = require('../../data/cinema.json')
    let cinemaList = cinema.data.cinemas
    this.cinemaList = cinemaList
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.cinema,{
        click:true
      })
    })
  }

}
</script>
<style  scoped>
.allcity{
  position: absolute;
  top: 94px;
  left: 0;
  bottom: 52px;
  width: 100%;
  overflow: hidden;
}
.cinema-list{
  padding: 20px;
}
.cinema-item{
  margin-bottom: 20px;
  border-bottom: 1px solid #dddddd;
}
.cinema-item:last-child{
  margin-bottom: 0;
}
.title{
  margin-bottom: 10px;
 display: flex;
}
.name{
  font-size: 16px;
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 4px;
}
.title .price{
  font-size: 18px;
  color: #f03d37;
}
.text{
  font-size:12px;
  color: #f03d37;
}
.location{
  margin-bottom: 10px;
  font-size: 13px;
  color: #666666;
  display: flex;
  justify-content: space-between;
}
.addr{
  max-width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card{
  display: flex;
  margin-bottom: 10px;
}
.card-item{
  padding: 1px;
  border: 1px solid #ff9900;
  font-size: 13px;
  color: #ff9900;
  border-radius: 2px;
  margin-right: 4px;
}
</style>