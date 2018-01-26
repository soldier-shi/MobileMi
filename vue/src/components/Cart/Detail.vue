<template>
	<div class="detail">
		<el-row>
			<el-col class="detail-item" :span="12" v-for="(l,i) in list">
				<router-link to="#">
					<img width="100%" :src="l.image_url"/>
					<div style="padding: 0.5rem 1rem;">
						<p>{{l.name}}</p>
						<p>
							<span style="color: #ff6700;font-size: 1.2rem;">￥{{l.price}}</span>
							<del v-if="l.price != l.market_price" style="color: rgba(0,0,0,.54);font-size: 0.8rem;">￥{{l.market_price}}</del>
						</p>
					</div>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import data from '../../data/cart.json'
	export default{
		name:'detail',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.list = data.data.recom_list.slice(0,8)
//			console.log(this.list)
		}
	}
</script>

<style scoped>
	.detail{
		background-color: white;
	}
	.detail .detail-item:nth-child(2n+1){
		padding-right: 0.1rem;
	}
	.detail .detail-item:nth-child(2n){
		padding-left: 0.1rem;
	}
</style>