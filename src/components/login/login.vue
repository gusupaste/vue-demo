<template>
  <div class="login-page" >
    <div class="login-logo">
      <img src="/static/img/logo.png" alt="">
    </div>
    <div class="logo_name">北京伊顿教育集团管理系统</div>
    <div class="login-wrap" v-loading="loading">
        <div style="margin-top:20px;color:#666;font-size:16px">登录</div>
         <el-input class="mt26"
            placeholder="请输入用户名"
            prefix-icon=""
            suffix-icon="el-icon-circle-close-outline"
            v-model="username">
        </el-input>
        <el-input class="mt26"
            :type="inputtype"
            placeholder="请输入密码"
            prefix-icon=""
            suffix-icon="el-icon-view"
            v-model="password">
        </el-input>
        <el-checkbox v-model="checked" class="mt10">记住密码</el-checkbox>
        <div>
          <el-button class="login-submit" @click="login">登录</el-button>
        </div>
    </div>
  </div>
</template>
<style lang="">
  .login-page {
    background:url('/static/img/login-bg.png') no-repeat;
    width:100%;
    background-size:100%;
    height:70%;
    border-top: 1px solid transparent;
  }
  .login-page .logo_name {
    font-size: 40px;
    color:#fff;
    letter-spacing:20px;
    margin-top: 20px;
  }
  .login-page .login-logo {
    margin-top: 100px;
  }
  .login-page .login-logo img{
    height: 50px;
  }
  .login-page .login-wrap {
    width:334px;
    height: 322px;
    border-radius: 5px;
    border: 1px solid #6da1bb;
    margin: 0 auto;
    margin-top: 80px;
    background-color: #f2f2f2;
    padding:40px;
    text-align: left;
  }
  .login-page .el-input__inner {
    color: #333;
  }
  .login-page .el-checkbox__label {
    font-size: 12px;
    color:#666 !important;
  }
  .login-page .is-checked .el-checkbox__inner {
    border-color:#f16f26 !important;
    background-color: #f16f26 !important;
  }
  .login-page .login-submit {
    width: 100%;
    color:#fff;
    background-color: #f16f26;
    margin-top: 56px;
    height: 44px;
  }
</style>
<script>
export default {
  data (){
    return {
      username:'',
      password:'',
      checked:true,
      loading:false,
      inputtype:'password'
    }
  },
  created(){

  },
  methods:{
    login(){
      var _this = this;
      _this.loading = true;
      // _this.inputtype = 'text';
      _this.$axios.post('http://192.168.50.232:8000/jwt-token-auth/',{
        username:_this.username,
        password:_this.password
      }).then(res=>{
        _this.loading = false;
          if(res.status == 200) {
            console.log(res)
            _this.$router.push('/home');
          }
      }).catch(err=>{
        _this.loading = false;
        _this.$message({
          type:'error',
          message:'用户名或密码错误'
        })
      })
    }
  }
}
</script>