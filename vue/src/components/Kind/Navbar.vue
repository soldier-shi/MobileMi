<template>
 <div class="navbar">
 	<el-row style="width: 100%;">
 		<el-col :span="3">
 			<a @click="back" class="fa fa-chevron-left fa-x icon"></a>
 		</el-col>
 		<el-col :span="18" style="text-align: center;">
 			<slot></slot>
 		</el-col>
 		<el-col :span="3" style="text-align: right;">
 			<router-link to="/search" class="fa fa-search icon"></router-link>
 		</el-col>
 	</el-row>
 </div>
</template>

<script>
    export default {
      name: "navbar",
      methods:{
        back(){
            window.history.back();
        }
      }
    }
</script>

<style scoped>
  .navbar{
  	position: fixed;
  	top: 0;
  	width: 100%;
  	height: 3.5rem;
  	display: flex;
  	justify-content: space-between;
  	font-size: 1.2rem;
  	color: rgba(0,0,0,.35);
  	line-height: 3.5rem;
  	background-color: #f2f2f2;
  	padding: 0 1rem;
  	z-index: 999;
  }
</style>
