<template>
  <div class="content" ref="content">
    <div class="content-wrapper">
      <div class="title">
        <span>热门城市</span>
      </div>
      <div class="hotcity">
        <ul class="hotcity-list">
          <li class="hotcity-item" v-for="item in hotcity" :key="item.id">
            <span>{{ item.nm }}</span>
          </li>
        </ul>
      </div>
      <div class="city-list" v-for="item in cities" :key="item.id">
        <div class="city-item" >
          <div class="first-letter">
            <span>{{ item.index }}</span>
          </div>
          <ul class="container">
            <li class="type" v-for="city in item.cities" :key="city.id">
              <span class="name">{{ city.nm }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import func from '../../../vue-temp/vue-editor-bridge';
import BScroll from 'better-scroll'
export default {
  name : 'citylist',
  data () {
    return {
      hotcity:[],
      cities:[]
    };
  },
  created(){
    const data = require('../../data/citylist.json')
    let citylist = data.data.cities
    this.datafomate(citylist)
    this.$nextTick(()=>{
     this.Scroll = new BScroll(this.$refs.content,{
        click:true
     })
    })
  },
  methods:{
    //最终要把数据处理成下面的格式
    // [{index:"A",cities：[{nm:"阿勒颇"，id：1},{....},{.... }]}]
    datafomate(citylist){
      let cities = []
      let hotcity = []
      //遍历数据把第一个字母相同的城市放在一起
      for(let i=0 ;i<citylist.length;i++){
        let firstletter = citylist[i].py.substring(0,1).toUpperCase();
        if(toCom(firstletter)){  //添加新的index
          cities.push({ index:firstletter,cities:[{ nm:citylist[i].nm, id:citylist.id }] })
        }else{  //往之前的index中添加城市
          for(let j=0;j<cities.length;j++){
            if(cities[j].index === firstletter){
              cities[j].cities.push({ nm:citylist[i].nm, id:citylist[i].id })
            }
          }
        }
        //选取热门城市
        if(citylist[i].isHot === 1){
          hotcity.push({nm:citylist[i].nm, id:citylist[i].id})
        }
      }
      //判断cities中是否以及存在了某个index
      function toCom(firstletter){
        for(let i=0;i<cities.length;i++){
          if(cities[i].index === firstletter){
            return false
          }
        }
        return true
      }

      //对cities进行排序
      cities.sort((n1,n2) => {
        if(n1.index > n2.index){
          return 1
        }else if(n1.index < n2.index ){
          return -1
        }else{
          return 0
        }
      })
      this.cities = cities
      this.hotcity = hotcity
    },
    
  }

}
</script>
<style  scoped>
.wrapper{
  display: flex;
}
.content{
  position: absolute;
  top: 94px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.content .title{
  height: 30px;
  background-color: #f0f0f0;
  padding-left: 15px;
  font-size: 14px;
  line-height: 30px;
}
.content .hotcity{
  padding: 15px;
}
.content .hotcity-list{
  display: flex;
  flex-wrap: wrap;
}
.content .hotcity-item{
  border: 1px solid #e6e6e6;
  height: 33px;
  line-height: 33px;
  flex: 0 0 100px;
  text-align: center;
  margin: 10px 0 0 10px;
  box-shadow: 0 0 6px #e6e6e6;
}
.city-list{
  background-color: #ffcccc;
}
.city-item .first-letter{
  height: 30px;
  background-color: #f0f0f0;
  padding-left: 15px;
  font-size: 14px;
  line-height: 30px;
}
.city-item .container{
  padding: 10px
}
.city-item .type{
  line-height: 30px;
  font-size: 16px;
  /* border-bottom: 1px solid #ddd; */
}
</style>