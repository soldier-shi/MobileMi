<template>
	<div class="my">
		<div class="my-1">
			<router-link to="/login">
				<el-row>
					<el-col :span="5">
						<img class="logoimggg" style="position: relative;left: 1.5rem;top: 1rem;" src="../../imgs/index.png"/>
					</el-col>
					<el-col :span="19" style="color: white;">
						登录/注册
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-2">
			<el-row>
				<router-link to="#">
					<el-col :span="12" style="font-size: 1.1rem;">
						我的订单
					</el-col>
				</router-link>
				<router-link to="#">
					<el-col :span="12" style="color: rgba(0,0,0,.54);text-align: right;">
						全部订单&nbsp;>
					</el-col>
				</router-link>	
			</el-row>
		</div>
		<div class="my-3">
			<el-row style="text-align: center;">
				<router-link to="#">
					<el-col :span="8">
						<i class="fa fa-book"></i>
						<p>待付款</p>
					</el-col>
				</router-link>
				<router-link to="#">
					<el-col :span="8">
						<i class="fa fa-book"></i>
						<p>待收货</p>
					</el-col>
				</router-link>
				<router-link to="#">
					<el-col :span="8">
						<i class="fa fa-book"></i>
						<p>退换修</p>
					</el-col>
				</router-link>
			</el-row>
		</div>
		<div class="my-4">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: yellow;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20" style="border-bottom: 1px solid rgba(0,0,0,.30);">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								会员福利
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-4">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: deepskyblue;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								我的优惠
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-4" style="margin-top: 1rem;">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: aquamarine;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20" style="border-bottom: 1px solid rgba(0,0,0,.30);">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								服务中心
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-4">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: blueviolet;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								小米之家
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-4" style="margin-top: 1rem;">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: darkred;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								F码通道
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
		<div class="my-4" style="margin-top: 1rem;">
			<router-link to="#">
				<el-row>
					<el-col :span="4" style="font-size: 1.8rem;padding-left: 1rem;">
						<i style="color: darkkhaki;" class="fa fa-home"></i>
					</el-col>
					<el-col :span="20" style="border-bottom: 1px solid rgba(0,0,0,.30);">
						<el-row>
							<el-col :span="22" style="font-size: 1.2rem;">
								设置
							</el-col>
							<el-col :span="2" style="color: rgba(0,0,0,.45);">
								>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'my'
	}
</script>

<style scoped>
	.my{
		width: 100%;
		height: 100%;
	}
	.my .my-1{
		height: 5rem;
		line-height: 5rem;
		background: url(../../imgs/bg.63c8e19.png) center 0 #f37d0f;
	}
	.logoimggg{
		width: 50px;
		height: 50px;
	}
	.my .my-2{
		background-color: white;
		padding: 1rem 1.2rem;
		border-bottom: 1px solid rgba(0,0,0,.37);
	}
	.my .my-3{
		background-color: white;
		padding: 1rem 0;
		color: rgba(0,0,0,.50);
		margin-bottom: 1rem;
	}
	.my .my-3 i{
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}
	.my .my-4{
		background-color: white;
		height: 4rem;
		line-height: 4rem;
	}
</style>