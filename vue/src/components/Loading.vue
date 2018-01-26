<template>
    <div class="loading" v-if="showLoading"></div>
</template>

<script>
    export default {
        name: "loading",
        data(){
          return{
            showLoading:true
          }
        },
      mounted () {
        var me = this;
        setTimeout(function () {
          me.showLoading = false;
        }, 1500);
      }
    }
</script>

<style scoped>
  .loading{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    display: block;
    background-color: #F87300;
    background-image: url("../imgs/loading.png");
    background-repeat: no-repeat;
    background-size: 20% 15%;
    background-position: center center;
  }
</style>
