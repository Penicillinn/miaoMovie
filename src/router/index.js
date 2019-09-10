import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import movie from '../components/view/movie'
import citylist from '../components/movie/citylist'
import nowplay from '../components/movie/nowplay'
import coming from '../components/movie/coming'
import search from '../components/movie/search'
import movieDetail from '../components/movie/movieDetail'
import cinema from '../components/view/cinema'
import allcity from '../components/cinema/allcity'
import grand from '../components/cinema/grand'
import feature from '../components/cinema/feature'
import mine from '../components/view/mine'

export default new Router({
  routes: [
    { path:'/', redirect:'/movie' },
    { path:'/movie', redirect:'/movie/nowplay', component:movie ,
      children:[
        { path:'citylist', name:'citylist', component:citylist },
        { path:'nowplay', name:'nowplay', component:nowplay },
        { path:'coming', name:'coming', component:coming },
        { path:'search', name:'search', component:search }
      ]
    },
    { path:'/movie/detail/:id', name:'movieDetail', component:movieDetail},
    { path:'/cinema', redirect:'/cinema/allcity', component:cinema ,
      children:[
        { path:'allcity', name:'allcity', component:allcity },
        { path:'grand', name:'grand', component:grand },
        { path:'feature', name:'feature', component:feature },
      ]
    },
    { path:'/mine', name:'mine', component:mine }
  ]
})
