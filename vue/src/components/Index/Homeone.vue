<template>
	<div class="homeone">
		<div class="homeone-1">
			<img width="100%" :src="list[0]"/>
		</div>
		<div class="homeone-2">
			<div v-for="(l,i) in list1" style="display: inline-block;width: 20%;">
				<img width="100%" :src="l.img_url" alt="" />
			</div>
		</div>
		<div class="homeone-3">
			<img width="100%" :src="list2"/>
		</div>
		<div class="homeone-4">
			<div class="homeone-4-1" v-for="(l,i) in list3">
				<img width="100%" :src="l.img_url"/>
				<el-row style="padding-top: 1rem;padding-left: 1rem;padding-right: 1rem;">
					<el-col :span="14">
						<span style="font-size: 1.1rem;">{{l.product_name}}</span>
					</el-col>
					<el-col :span="10" style="text-align: right;">
						<span style="font-size: 0.9rem;color: #ea625b;">
							￥{{l.product_price}}起
							<del style="color: rgba(0,0,0,.35);font-size: 0.7rem;" v-if="l.product_price != l.product_org_price">￥{{l.product_org_price}}</del>
						</span>
					</el-col>
				</el-row>
				<el-row style="padding: 1rem;">
					<el-col :span="16">
						<span style="font-size: 0.8rem;">{{l.product_brief}}</span>
					</el-col>
					<el-col :span="8" style="text-align: right;">
						<span>{{l.btn_txt}}</span>
					</el-col>
				</el-row>
			</div>
		</div>

	</div>
</template>

<script>
	import data from '../../data/homeone.json'
	export default{
		name:'homeone',
		data(){
			return{
				list:[],
				list1:[],
				list2:'',
				list3:[]
			}
		},
		mounted(){
			this.list[0] = data.data.data.sections[0].body.items[0].img_url
			this.list1 = data.data.data.sections[1].body.items
			this.list2 = data.data.data.sections[2].body.items[0].img_url
			this.list3[0] = data.data.data.sections[3].body.items[0]
			this.list3[1] = data.data.data.sections[5].body.items[0]
			this.list3[2] = data.data.data.sections[7].body.items[0]
			this.list3[3] = data.data.data.sections[9].body.items[0]
			this.list3[4] = data.data.data.sections[11].body.items[0]
		}
	}
</script>

<style scoped>
.homeone img{
	display: block;
}
.homeone .homeone-2{
	height: 4.5rem;
}
.homeone .homeone-4 .homeone-4-1{
	border-right: 0.5rem solid #fc9e2e;
	border-left: 0.5rem solid #fc9e2e;
	border-bottom: 0.5rem solid #fc9e2e;
}
.homeone-4 *{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>
