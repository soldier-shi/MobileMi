<template>
  <div class="login">
    <div class="login-1">
      <img src="../../imgs/milogo.png" alt="" />
      <p>小米账号注册</p>
    </div>
    <div class="login-2">
      <div>
        <input type="text" v-model="params.username" name="username" placeholder="请输入正确的手机号码"/>
        <input type="password" v-model="params.password" name="password" placeholder="密码必须在6-16长度之间"/>
      </div>
    </div>
    <div class="login-3">
      <button @click="submit">注册</button>
    </div>
    <loginfooter></loginfooter>
  </div>
</template>

<script>
  import loginfooter from './Loginfooter'
  export default{
    nameL:'login',
    data(){
      return{
        params:{
          username:'',
          password:''
        }
      }
    },
    components:{
      loginfooter
    },
    mounted(){

    },
    methods:{
      submit(){
        let username = this.params.username;
        let psw = this.params.password;
        if(/^1[3|5|8]\d{9}$/.test(username)){
          if(/\w.{5,15}$/.test(psw)){
            this.http.post('/users/reg',this.params).then(res=>{
              console.log(res.data)
              this.$router.push({path:'/login'})
            }).catch(err=>{
              console.log(res.data)
            })
          }else {
            alert('密码不合法')
          }
        }else {
          alert('账号不合法')
        }
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 605px;
    text-align: center;
  }
  .login-1{
    font-size: 1.2rem;
    padding-top: 2.5rem;
  }
  .login-1 p{
    margin-top: 1rem;
  }
  .login-2{
    margin: 1rem;
  }
  .login-2 div{
    width: 100%;
    height: 4.5rem;
    border-radius: 10px;
    background-color: white;
    padding: 0 0.5rem;
  }
  .login-2 input{
    width: 100%;
    display: block;
    font-size: 1rem;
    padding: 0.5rem;
    outline: none;
    border: none;
    background-color: white;
  }
  .login-3{
    margin: 2rem 1rem;
  }
.login-3 button{
  width: 100%;
  background-color: #33b4ff;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 2.5rem;
  color: white;
  border: none;
}
</style>
