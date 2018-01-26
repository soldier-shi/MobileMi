<template>
	<div class="hotsearch">
		<div class="hotsearch-1">
			热门搜索
		</div>
		<div class="hotsearch-2">
			<img width="100%" :src="img" alt="" />
		</div>
		<div class="hotsearch-3">
			<el-row>
				<router-link to="#">
					<el-col :span="6" v-for="(l,i) in list" 
						style="text-align: center;background-color: hsla(12,99%,71%,.05);color: #484848;font-size: 0.8rem;padding: 0.5rem 0;margin: 0.4rem;border: 1px solid rgba(0,0,0,.15);">
						{{l.word}}
					</el-col>
				</router-link>
			</el-row>
		</div>
	</div>
</template>

<script>
	import data from '../../data/search.json'
	export default{
		name:'hotsearch',
		data(){
			return{
				img:'',
				list:[]
			}
		},
		mounted(){
			this.img = data.data.ad_list[0].body.items[0].img_url
			this.list = data.data.keywords
//			console.log(this.list)
		}
	}
</script>

<style scoped>
	.hotsearch-1{
		width: 100%;
		background-color: white;
		padding: 0.9rem;
		font-size: 0.8rem;
	} 
	.hotsearch-3{
		padding: 0.3rem 0.5rem;
	}
</style>