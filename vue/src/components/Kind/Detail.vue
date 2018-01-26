<template>
	<div class="detail">
			<div>
				<img width="100%" :src="data.category_list[0].body.items[0].img_url" alt="" />
			</div>
			<div>
				<router-link to="#">
					<p style="text-align: center;padding: 1rem 0;">
						——&nbsp;{{data.category_list[1].body.category_name}}&nbsp;——
					</p>
				</router-link>
				<el-row>
					<el-col	style="font-size: 0.8rem;text-align: center;"
						 :span="8" v-for="(l,i) in data.category_list[2].body.items">
						 <router-link to="#">
						 	<div style="padding: 1rem;">
							 	<img width="100%" :src="l.img_url" alt="" />
							 </div>
							<p>{{l.product_name}}</p>
						 </router-link>
					</el-col>
				</el-row>
			</div>
			<!--<div v-if="data.category_list[3]">
				<router-link to="#">
					<p style="text-align: center;padding: 1rem 0;" v-if="data.category_list[3].body.category_name">
						——&nbsp;{{data.category_list[3].body.category_name}}&nbsp;——
					</p>
				</router-link>
				<el-row>
					<el-col	style="font-size: 0.8rem;text-align: center;"
						 :span="8" v-for="(l,i) in data.category_list[4].body.items">
						 <router-link to="#">
						 	<div style="padding: 1rem;">
							 	<img width="100%" :src="l.img_url" alt="" />
							 </div>
							<p>{{l.product_name}}</p>
						 </router-link>
					</el-col>
				</el-row>
			</div>
			<div v-if="data.category_list[5]">
				<router-link to="#">
					<p style="text-align: center;padding: 1rem 0;" v-if="data.category_list[5].body.category_name">
						——&nbsp;{{data.category_list[5].body.category_name}}&nbsp;——
					</p>
				</router-link>
				<el-row>
					<el-col	style="font-size: 0.8rem;text-align: center;"
						 :span="8" v-for="(l,i) in data.category_list[6].body.items">
						 <router-link to="#">
						 	<div style="padding: 1rem;">
							 	<img width="100%" :src="l.img_url" alt="" />
							 </div>
							<p>{{l.product_name}}</p>
						 </router-link>
					</el-col>
				</el-row>
			</div>-->
	</div>
</template>

<script>
	export default{
		name:'detail',
		props:['data'],
		data(){
			return{
				list:[]
			}
		},
		mounted(){
		
		}
	}
</script>

<style>
</style>