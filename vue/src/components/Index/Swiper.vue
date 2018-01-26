<template>
    <div class="swiper">
      <div class="block">
        <el-carousel height="12rem">
          <el-carousel-item v-for="(l,index) in list" :key="l.img_url">
            <img height="100%" width="100%" :src="l.img_url"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <allitems></allitems>
    </div>
</template>

<script>
	import data from '../../data/hotword.json'
	import allitems from './allitems'
    export default {
        name: "swiper",
        data(){
          return{
            list:[]
          }
        },
        components:{
        	allitems
        },
        mounted(){
          this.list = data.data.data.sections[0].body.items;
//        console.log(this.list)
        }
    }
</script>

<style scoped>

</style>
