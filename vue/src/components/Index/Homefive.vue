<template>
  <div class="homefive">
    <div class="homefive-0">
      <img width="100%" :src="list" alt="">
    </div>
    <div class="hometwo-1">
      <img width="100%" :src="list1" alt="">
    </div>
    <div class="hometwo-2" v-for="list2 in list2" :key="list2.product_id">
      <div>
        <img width="100%" :src="list2.img_url" alt="">
        <div style="padding: 1rem">
          <el-row>
            <el-col :span="14" style="font-size: 1.1rem">
              {{list2.product_name}}
            </el-col>
            <el-col :span="10" style="text-align: right;color: #ea625b">
              ￥{{list2.product_price}}
              <del style="font-size: 0.8rem;color: rgba(0,0,0,.35)" v-if="list2.product_price != list2.product_org_price">￥{{list2.product_org_price}}</del>
            </el-col>
          </el-row>
          <p style="font-size: 0.8rem;color: rgba(0,0,0,.35);margin-top: 0.5rem">{{list2.product_brief}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../../data/homefive.json'
  export default{
    name:'homefive',
    data(){
      return{
        list:'',
        list1:'',
        list2:[]
      }
    },
    mounted(){
      this.list = data.data.data.sections[0].body.items[0].img_url;
      this.list1 = data.data.data.sections[1].body.items[0].img_url;
      this.list2 = this.list2.concat(data.data.data.sections[2].body.items[0],data.data.data.sections[4].body.items[0]) ;
    }
  }
</script>

<style scoped>
  .hometwo-1{
    margin-top: 0.5rem;
  }
  .hometwo-3{
    background-color: white;
  }
  .hometwo-3 *{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .hometwo-3 p{
    margin-top: 0.5rem;
  }
  .padstyle:nth-of-type(2n+1){
    padding-right: 0.1rem;
  }
  .padstyle:nth-of-type(2n){
    left: 0.1rem;
  }
</style>
