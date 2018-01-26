<template>
  	<div>
	    <search></search>
	    <hotword></hotword>
	    <swiper></swiper>
	    <allitems></allitems>
	  </div>
</template>

<script>
    import search from '../components/Index/Search'
    import hotword from '../components/Index/HotWord'
    import swiper from '../components/Index/Swiper'
    import allitems from '../components/Index/Allitems'
    export default {
        name: "index",
        components:{
          search,hotword,swiper,allitems
        }
    }
</script>

<style scoped>

</style>
