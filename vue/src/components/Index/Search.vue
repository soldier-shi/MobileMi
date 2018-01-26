<template>
    <div class="search">
      <div class="search-left">
        <img src="../../imgs/search.png" alt="">
      </div>
      <div class="search-middle">
        <router-link to="/search">
        	<div>
	          <i class="fa fa-search"></i>
	          搜索商品名称
	        </div>
        </router-link>
      </div>
      <div class="search-right">
        <router-link to="/my">
        	<i class="fa fa-user"></i>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
.search{
  display: flex;
  width: 100%;
  height: 3rem;
}
.search-left{
  width: 15%;
  padding: 1rem 0.5rem;
  text-align: center;
}
.search-left img{
  width: 1.5rem;
  height: 1rem;
}
.search-middle{
  width: 70%;
  color: #aaaaaa;
}
.search-middle div{
  background-color: white;
  padding: 0.3rem;
  margin-top: 0.5rem;
}
.search-right{
  width: 15%;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0;
  color: #aaaaaa;
}
</style>
