<template>
  <div id="app">
  	<loading></loading>
  	<div>
  		<transition name="fade" mode="out-in">
	  		<router-view/>
	  	</transition>
  	</div>
  	
  		<div v-if="agourl.indexOf('search') == -1 && nowurl.indexOf('login') == -1 && agourl.indexOf('login') == -1 && nowurl.indexOf('search') == -1" style="height: 4rem;"></div>
  		<tabbar v-if="agourl.indexOf('search') == -1 && nowurl.indexOf('login') == -1 && agourl.indexOf('login') == -1 && nowurl.indexOf('search') == -1" style="height: 4rem;"></tabbar>
  </div>
</template>

<script>
	import loading from './components/Loading'
	import tabbar from './components/Tabbar'
export default {
  name: 'App',
  data(){
  	return{
  		agourl:'',
  		nowurl:''
  	}
  },
  components:{
  	loading,tabbar
  },
  mounted(){
  	this.agourl = window.location.href;
//	console.log(window.location.href.slice(24))
  },
  updated(){
//	console.log(window.location.href.slice(24))
  	this.nowurl = window.location.href;
  }
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active {
	transition: all .6s
}
.fade-enter, .fade-leave-to {
  transform: translateX(-100%);
}
</style>
