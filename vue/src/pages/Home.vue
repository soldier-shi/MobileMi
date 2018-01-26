<template>
  <div>
  	<search></search>
	  <hotword></hotword>
	  <transition name="fade" mode="out-in">
	  	<router-view></router-view>
	  </transition>

  </div>
</template>
<script>
    import search from '../components/Index/Search'
    import hotword from '../components/Index/HotWord'
    export default {
        name: "index",
        components:{
          search,hotword
        }
    }
</script>

<style scoped>
.fade-enter-active,.fade-leave-active {
	transition: all .2s
}
.fade-enter, .fade-leave-to {
  transform: scaleX(0);
}
</style>
