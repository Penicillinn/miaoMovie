<template>
  <div class="mine"> 
    <!-- 头部 -->
    <Header title="个人中心"></Header>
    <!-- 内容 -->
    <div class="login">
      <div class="username">
        <span>登录：</span>
        <input type="text" placeholder="请输入用户名"/>
      </div>
      <div class="password">
        <span>密码：</span>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="btn">
        <button>登录</button>
        <button>注册</button>
      </div>

    </div>


    <!-- 底部 -->
    <Footer></Footer>
  </div> 
</template>
<script>
import Header from '../common/Head'
import Footer from '../common/Footer'
export default {
  name : 'mine',
  data () {
    return {
    };
  },
  components:{
    Header,Footer
  }

}
</script>
<style  scoped>
.login{
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
.username{
  line-height: 42px;
  margin: 15px;
}
.password{
  line-height: 42px;
  margin: 15px;
}
input{
  width:265px;
  height: 42px;
  padding: 0 10px;
  border: 1px solid #dddddd; 
}
span{
  font-size: 16px;
}
.btn{
  text-align: center;
}
.btn button{
  width: 70px;
  height: 40px;
  background-color: #ef4238;
  color: white;
  font-size: 14px;
  border: 0;
  border-radius: 4px;
}

</style>