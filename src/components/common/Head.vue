<template>
  <div class="header"> 
    <slot name="left"></slot>
    <h1 class="title">{{ title }}</h1>
  </div> 
</template>
<script>
export default {
  name : 'Head',
  props:["title"],
  data () {
    return {
    };
  },

}
</script>
<style  scoped>
.header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
  background-color: #e54847;
  border-bottom: 1px solid #e54847;
  box-sizing: border-box;
  text-align: center;
}
.title{
  font-size: 18px;
  color: white;
  line-height: 50px;
}
</style>