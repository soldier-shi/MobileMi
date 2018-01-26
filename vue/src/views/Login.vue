<template>
	<div class="login">
		<div class="login-1">
			<img src="../imgs/milogo.png" alt="" />
			<p>小米账号登陆</p>
		</div>
		<div class="login-2">
			<div>
				<input type="text" v-model="params.username" name="username" placeholder="手机号码"/>
				<input type="password" v-model="params.password" name="password" placeholder="密码"/>
			</div>
		</div>
		<div class="login-3">
			<span @click="submit">登陆</span>
		</div>
		<!--<div class="login-3 login-3-1">-->
			<!--<span>手机短信注册/登陆</span>-->
		<!--</div>-->
		<div style="margin: 1rem;">
			<fieldset id="login-4">
				<legend center>其他方式登陆</legend>
			</fieldset>
		</div>
		<div class="login-5">
			<div style="width: 60%;margin: 0 auto;">
				<div class="login-5-img-1"></div>
				<div class="login-5-img-2"></div>
				<div class="login-5-img-3"></div>
			</div>
		</div>
		<div class="login-6">
			<router-link to="/login/register">
				<span style="margin-right: 1rem;">立即注册</span>
			</router-link>
			<span style="margin-left: 1rem;">忘记密码?</span>
		</div>
		 <loginfooter></loginfooter>
	</div>
</template>

<script>
	import loginfooter from '../components/Login/Loginfooter'
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
    methods:{
		  submit(){
		    this.http.post('/users/login',this.params).then(res=>{
		      console.log(res.data)
        }).catch(err=>{
          console.log(err)
        })
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
	.login-3 span{
		display: block;
		width: 100%;
		background-color: #33b4ff;
		height: 2.5rem;
		line-height: 2.5rem;
		border-radius: 2.5rem;
		color: white;
	}
	.login-3-1 span{
		background-color: white;
		color: rgba(0,0,0,.85);
	}
	#login-4{
		border: none;
		border-top: 1px dashed rgba(0,0,0,.25);
		color: rgba(0,0,0,.35);
	}
	.login-5 .login-5-img-1,.login-5-img-2,.login-5-img-3{
		display: inline-block;
		width: 25%;
	}
	.login-5-img-1{
		height: 4rem;
		background-image: url(../imgs/other.png);
		background-position: 15% -10px;
	}
	.login-5-img-2{
		height: 4rem;
		background-image: url(../imgs/other.png);
		background-position: 51% -10px;
	}
	.login-5-img-3{
		height: 4rem;
		background-image: url(../imgs/other.png);
		background-position: 88% -10px;
	}
	.login-6{
		margin: 2rem 0;
		color: rgba(0,0,0,.35);
	}

</style>
