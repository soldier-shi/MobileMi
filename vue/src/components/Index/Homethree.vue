<template>
  <div class="homethree">
    <otherswiper :item="list"></otherswiper>
    <div class="hometwo-1">
      <img width="100%" :src="list1" alt="">
    </div>
    <div class="hometwo-2">
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
    <div class="hometwo-3">
      <div>
        <el-row>
          <el-col class="padstyle" :span="12" v-for="(l,i) in list3" :key="l.product_id">
            <img width="100%" :src="l.img_url" alt="">
            <div style="padding: 0.5rem;padding-bottom: 1rem">
              <p>{{l.product_name}}</p>
              <p style="font-size: 0.8rem;color: rgba(0,0,0,.35)">{{l.product_brief	}}</p>
              <p style="color: #ea625b">￥{{l.product_price}}
                <del style="font-size: 0.8rem;color: rgba(0,0,0,.35)" v-if="l.product_price != l.product_org_price">￥{{l.product_org_price}}</del>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import otherswiper from './Otherswiper'
  import data from '../../data/homethree.json'
  export default{
    name:'homethree',
    data(){
      return{
        list:[],
        list1:'',
        list2:{},
        list3:[]
      }
    },
    components:{
      otherswiper
    },
    mounted(){
      this.list = data.data.data.sections[0].body.items;
      this.list1 = data.data.data.sections[1].body.items[0].img_url;
      this.list2 = data.data.data.sections[2].body.items[0];
      this.list3 = this.list3.concat(data.data.data.sections[3].body.items,data.data.data.sections[4].body.items);
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
