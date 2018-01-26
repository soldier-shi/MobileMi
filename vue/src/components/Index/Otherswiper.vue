<template>
  <div class="otherswiper">
    <div class="block">
      <el-carousel height="12rem">
        <el-carousel-item v-for="(l,index) in item" :key="l.img_url">
          <img height="100%" width="100%" :src="l.img_url"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "otherswiper",
    props:['item']
  }
</script>

<style scoped>

</style>
