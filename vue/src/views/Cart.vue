<template>
		<div>
    <navbar>购物车</navbar>
    <div style="height: 3.5rem;"></div>
    <div class="cart-login">
    	<router-link to="/login">
    		<el-row>
	    		<el-col style="font-size: 1.2rem;color: rgb(0,0,0,0.87);" :span="16">登陆后享受更多优惠</el-col>
	    		<el-col :span="8" style="text-align: right;color: rgb(0,0,0,0.54);font-size: 0.9rem;">
	    				<span>去登陆</span>
	    				<i class="fa fa-angle-right"></i>
	    		</el-col>
	    	</el-row>
    	</router-link>
    </div>
    <div class="cart-thing">
    	<router-link to="/">
    		<el-row>
    			<el-col :span="16" style="text-align: right;color: rgba(0,0,0,0.27);padding-right: 0.2rem;">
    				<i class="fa fa-shopping-basket"></i>
    				<span>购物车还是空的</span>
    			</el-col>
    			<el-col :span="8" >
    				<span style="border: 1px solid rgba(0,0,0,0.27);padding: 0.3rem 1rem;">
    					去逛逛
    				</span>
    			</el-col>
    		</el-row>
    	</router-link>
    </div>
    <div class="recome-logo">
    	<img width="100%" :src="this.logoUrl" alt="" />
    </div>
    <detail></detail>
  </div>

</template>

<script>
	import navbar from '../components/Kind/Navbar'
	import detail from '../components/Cart/Detail'
	import data from '../data/cart.json'
    export default {
        name: "cars",
        data(){
        	return{
        		logoUrl:''
        	}
        },
        components:{
        	navbar,detail
        },
        mounted(){
        	this.logoUrl = data.data.header.body.items[0].img_url;
//      	console.log(this.logoUrl)
        }
    }
</script>

<style scoped>
.cart-login{
	background-color: white;
	width: 100%;
	height: 3.5rem;
	line-height: 3.5rem;
	padding: 0 1rem;
}
.cart-thing{
	background-color: #ebebeb;
	width: 100%;
	height: 4rem;
	line-height: 4rem;
	padding: 0 1rem;
}
.cart-thing i{
	font-size: 1.8rem;
}
</style>
