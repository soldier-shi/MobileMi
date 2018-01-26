<template>
  <div class="homeeight">
    <div v-for="l in list" :key="l.block_id">
      <img width="100%" :src="l.body.items[0].img_url" alt="">
    </div>
  </div>
</template>

<script>
  import data from '../../data/homeeight.json'
    export default {
        name: "homeeight",
      data(){
          return{
            list:[]
          }
      },
      mounted(){
          this.list = data.data.data.sections;
      }
    }
</script>

<style scoped>
.homeeight div:nth-of-type(9),.homeeight div:nth-of-type(10),
.homeeight div:nth-of-type(11),.homeeight div:nth-of-type(12){
  width: 50%;
  display: inline-block!important;
}

</style>
