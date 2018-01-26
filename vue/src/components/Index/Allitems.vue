<template>
	<div>
		<div class="allitems-1">
			<el-row>
				<el-col :span="6" v-for="(l,index) in list1" :key="l.img_url">
					<router-link to="#">
						<img height="100%" width="100%" :src="l.img_url" alt="" />
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div class="allitems-2">
			<el-row>
			  <el-col :span="12" style="padding-right: 0.1rem;">
			  	<router-link to="#">
			  		<img width="100%" :src="this.list2[0]"/>
			  	</router-link>
			  </el-col>
			  <el-col :span="12" style="padding-left: 0.1rem;">
			  	<router-link to="#">
			  		<img style="display: block;" height="100%" width="100%" :src="this.list2[1]"/>
			  	</router-link>
			  	<router-link to="#">
			  		<img style="display: block;margin-top: 0.2rem;" height="100%" width="100%" :src="this.list2[2]"/>
			  	</router-link>
			  </el-col>
			</el-row>
		</div>
		<div class="allitems-3">
			<router-link to="#">
		  		<img width="100%" :src="this.list3[0]" alt="" />
		  	</router-link>
		  	<router-link to="#">
		  		<img width="100%" :src="this.list3[1]" alt="" />
		  	</router-link>
		</div>
		<div class="allitems-4" style="margin-top: 0.5rem;">
			<router-link to="#">
		  		<img width="100%" :src="this.list4[0]" alt="" />
		  	</router-link>
		</div>
		<div class="allitems-5">
			<el-row>
			  <el-col class="allitems-5-1" :span="12" v-for="(l,index) in list51" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
			<el-row>
			  <el-col class="allitems-5-2" :span="12" v-for="(l,index) in list52" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
			<el-row>
			  <el-col class="allitems-5-3" :span="12" v-for="(l,index) in list53" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
		</div>
		<div style="height: 0.5rem;background-color: #f5f5f5;"></div>
		<div class="allitems-6">
			<el-row>
				<el-col>
					<router-link to="#">
						<img width="100%" :src="this.list6[0]" alt="" />
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div style="height: 0.5rem;background-color: #f5f5f5;"></div>
		<div class="allitems-7">
			<el-row>
				<el-col>
					<router-link to="#">
						<img width="100%" :src="this.list7[0]" alt="" />
					</router-link>
				</el-col>
			</el-row>
		</div>
		<div style="height: 0.2rem;background-color: #ffffff;"></div>
		<div class="allitems-8 allitems-5">
			<el-row>
			  <el-col class="allitems-5-1" :span="12" v-for="(l,index) in list81" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
			<el-row>
			  <el-col class="allitems-5-2" :span="12" v-for="(l,index) in list82" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
			<el-row>
			  <el-col class="allitems-5-3" :span="12" v-for="(l,index) in list83" :key="l.product_name">
			  	<router-link to="#">
			  		<img width="100%" :src="l.img_url" alt="" />
			  		<p>{{l.product_name}}</p>
			  		<p>{{l.product_brief}}</p>
			  		<p>
			  			<span>￥{{l.product_price}}</span>
			  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
			  		</p>
			  	</router-link>
			  </el-col>
			</el-row>
		</div>
		<div style="height: 0.1rem;background-color: #cecece;"></div>
		<div class="allitems-9">
			<el-row>
				<el-col class="more-new">
					<router-link to="#">
						<p>{{this.list91[0]}}&nbsp;></p>
					</router-link>
				</el-col>
			</el-row>
			<div style="height: 0.5rem;background-color: #f5f5f5;"></div>
			<el-row>
				<el-col>
					<router-link to="#">
						<img width="100%" :src="this.list92[0]" alt="" />
					</router-link>
				</el-col>
			</el-row>
			<div style="height: 0.5rem;background-color: #f5f5f5;"></div>
			<el-row>
				<el-col>
					<router-link to="#">
						<img width="100%" :src="this.list93[0]" alt="" />
					</router-link>
				</el-col>
			</el-row>
			<div style="height: 0.1rem;background-color: #ffffff;"></div>
			<el-row v-for="(l,index) in list94" class="left-right">
				<router-link to="#" v-if="index != 1">
					<el-col :span="12">
						<img width="100%" :src="l.img_url" alt="" />
					</el-col>
					<el-col :span="12" class="left-right-content">
						<p>{{l.product_name}}</p>
				  		<p>{{l.product_brief}}</p>
				  		<p>
				  			<span>￥{{l.product_price}}</span>
				  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
				  		</p>
					</el-col>
				</router-link>
				<router-link to="#" v-if="index === 1">
					<el-col :span="12" class="left-right-content">
						<p>{{l.product_name}}</p>
				  		<p>{{l.product_brief}}</p>
				  		<p>
				  			<span>￥{{l.product_price}}</span>
				  			<span v-if="l.product_org_price != l.product_price">{{l.product_org_price}}</span>
				  		</p>
					</el-col>
					<el-col :span="12">
						<img width="100%" :src="l.img_url" alt="" />
					</el-col>
				</router-link>
			</el-row>
		</div>
		<div class="allitems-10">
			
		</div>
	</div>
	
</template>

<script>
	import data from '../../data/hotword.json'
    export default {
        name: "allitems",
        data(){
          return{
            list1:[],
            list2:[],
            list3:[],
            list4:[],
            list51:[],
            list52:[],
            list53:[],
            list6:[],
            list7:[],
            list81:[],
            list82:[],
            list83:[],
            list91:[],
            list91:[],
            list92:[],
            list93:[],
            list94:[],
            list10:[]
          }
        },
        mounted(){ 
          this.list1 = data.data.data.sections[1].body.items;
//        console.log(this.list1)
          this.list2[0] = data.data.data.sections[3].body.items[0].img_url;
          this.list2[1] = data.data.data.sections[3].body.items[1].img_url;
          this.list2[2] = data.data.data.sections[3].body.items[2].img_url;
//        console.log(this.list2)
          this.list3[0] = data.data.data.sections[5].body.items[0].img_url;
          this.list3[1] = data.data.data.sections[7].body.items[0].img_url;
          this.list4[0] = data.data.data.sections[9].body.items[0].img_url;
          this.list51 = data.data.data.sections[11].body.items;
          this.list52 = data.data.data.sections[12].body.items;
          this.list53 = data.data.data.sections[13].body.items;
          this.list6[0] = data.data.data.sections[15].body.items[0].img_url;
		  this.list7[0] = data.data.data.sections[17].body.items[0].img_url;
		  this.list81 = data.data.data.sections[19].body.items;
          this.list82 = data.data.data.sections[20].body.items;
          this.list83 = data.data.data.sections[21].body.items;
          this.list91[0] = data.data.data.sections[23].body.items[0].action_title;
          this.list92[0] = data.data.data.sections[25].body.items[0].img_url;
          this.list93[0] = data.data.data.sections[27].body.items[0].img_url;
          this.list94[0] = data.data.data.sections[29].body.items[0];
          this.list94[1] = data.data.data.sections[30].body.items[0];
          this.list94[2] = data.data.data.sections[31].body.items[0];
        }
    }
</script>

<style scoped>
	.allitems-2{
		margin-top: 0.5rem;
		height: 16rem;
	}
	.allitems-5-1:nth-of-type(1){
		padding-right: 0.1rem;
	}
	.allitems-5-1:nth-of-type(2){
		padding-left: 0.1rem;
	}
	.allitems-5-2:nth-of-type(1){
		padding-right: 0.1rem;
	}
	.allitems-5-2:nth-of-type(2){
		padding-left: 0.1rem;
	}
	.allitems-5-3:nth-of-type(1){
		padding-right: 0.1rem;
	}
	.allitems-5-3:nth-of-type(2){
		padding-left: 0.1rem;
	}
	.allitems-5 .el-col{
		padding-bottom: 1rem;
	}
	.allitems-5 a p{
		margin-top: 0.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.allitems-5 a p:nth-of-type(1){
		font-size: 1.2rem;
		color: black;
	}
	.allitems-5 a p:nth-of-type(2){
		font-size: 0.9rem;
		color: rgb(0,0,0,.54);
	}
	.allitems-5 a p:nth-of-type(3){
		font-size: 1.2rem;
		color: #ea625b;
	}
	.more-new{
		color: rgb(0,0,0,.6);
		font-size: 1.2rem;
		background-color: white;
		text-align: center;
		padding: 1rem 0;
	}
	.left-right img{
		display: block;
	}
	.left-right-content{
		padding: 2rem 1rem;
	}
	.left-right-content p{
		margin-bottom: 0.5rem;
	}
	.left-right-content p:nth-of-type(1){
		font-size: 1.2rem;
		color: rgb(0,0,0,.87);
	}
	.left-right-content p:nth-of-type(2){
		font-size: 0.8rem;
		color: rgb(0,0,0,.54);
	}
	.left-right-content p:nth-of-type(3){
		font-size: 1.2rem;
		color: #ea625b;
	}
</style>