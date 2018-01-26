<template>
  <div class="home">
    <div>
    	<router-link active-class="active" to="/home/zero">
    		<i class="fa fa-home"></i>
      	<p>首页</p>
    	</router-link>
    </div>
    <div>
      <router-link active-class="active" to="/kinds">
      	<i class="fa fa-list"></i>
      	<p>分类</p>
      </router-link>
    </div>
    <div>
      <router-link active-class="active" to="/cart">
      	<i class="fa fa-shopping-cart"></i>
      	<p>购物车</p>
      </router-link>
    </div>
    <div>
      <router-link active-class="active" to="/my">
      	<i class="fa fa-user"></i>
      	<p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tabbar",
        methods:{
        	
        }
    }
</script>

<style scoped>
  .home{
  	width: 100%;
  	height: 4rem;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;
    padding-top: 0.5rem;
    z-index: 999;
  }
  .home div{
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
  .active{
  	color: #ff6700;
  }
</style>
