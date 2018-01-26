<template>
	<div id="listright">
		<div class="listright-left">
			<el-row v-for="(l,index) in list" :key="l.category_name">
				<el-col class="headword">
					<p @click="changecolor(index)" :class="{kindactive:index == 0}">
						●&nbsp;{{l.category_name}}
					</p>
				</el-col>
			</el-row>
			<div style="height: 8rem;"></div>
		</div>
		<div class="listright-right">
			<el-row>
				<el-col>
					<detail v-for="(item,index) in list" :key="item.category_name" :data="item"></detail>
				</el-col>
			</el-row>
			<div style="height: 8rem;"></div>
		</div>
	</div>
</template>

<script>
	import data from '../../data/kind.json'
	import detail from './Detail'
	export default{
		name:'listright',
		data(){
			return{
				list:[]
			}
		},
		components:{
			detail
		},
		mounted(){
			this.list = data.data;
//			console.log(this.list);
			
		},
		methods:{
			clickcolor(e){
				var p = document.querySelectorAll('.headword p')[e];
				var allp = document.querySelectorAll('.headword p');
				for (var i = 0; i < allp.length; i++) {
					if (e == i) {
						p.className = 'kindactive';
					} else{
						allp[i].className = '';
					}
				}	
			},
			changecolor(e){
				var div = document.querySelector('.listright-right');
				var imgs = document.querySelectorAll('.detail');
				this.clickcolor(e);
				if (e == 0) {
					div.scrollTop = '0';
				}
				if (e == 1) {
					div.scrollTop = imgs[0].clientHeight;
				}
				if (e == 2) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight;
				}
				if (e == 3) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight;
				}
				if (e == 4) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight;
				}
				if (e == 5) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight;
				}
				if (e == 6) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight;
				}
				if (e == 7) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					+ imgs[6].clientHeight;
				}
				if (e == 8) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					+ imgs[6].clientHeight + imgs[7].clientHeight;
				}
				if (e == 9) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					 + imgs[6].clientHeight + imgs[7].clientHeight + imgs[8].clientHeight;
				}
				if (e == 10) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					 + imgs[6].clientHeight + imgs[7].clientHeight + imgs[8].clientHeight
					  + imgs[9].clientHeight;
				}
				if (e == 11) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					 + imgs[6].clientHeight + imgs[7].clientHeight + imgs[8].clientHeight
					  + imgs[9].clientHeight + imgs[10].clientHeight;
				}
				if (e == 12) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					 + imgs[6].clientHeight + imgs[7].clientHeight + imgs[8].clientHeight
					  + imgs[9].clientHeight + imgs[10].clientHeight + imgs[11].clientHeight;
				}
				if (e == 13) {
					div.scrollTop = imgs[0].clientHeight + imgs[1].clientHeight + imgs[2].clientHeight
					+ imgs[3].clientHeight + imgs[4].clientHeight + imgs[5].clientHeight
					 + imgs[6].clientHeight + imgs[7].clientHeight + imgs[8].clientHeight
					  + imgs[9].clientHeight + imgs[10].clientHeight + imgs[11].clientHeight
					   + imgs[12].clientHeight;
				}
			}
		}
	}
</script>

<style scoped>
	#listright{
		height: 700px;
	}
	#listright .headword{
		padding: 1rem 0;
		padding-left: 1rem;
		border-right: 1px solid #eeeeee;
		cursor: pointer;
	}
	.kindactive{
		color: #fb7d34;
		font-size: 1.1rem;
	}
	#listright .listright-left{
		position: fixed;
		left: 0;
		top: 3rem;
		bottom: 4.5rem;
		width: 25%;
		height: 100%;
		overflow-y: scroll;
		background-color: white;
	}
	#listright .listright-right{
		position: fixed;
		right: 0;
		top: 3rem;
		width: 75%;
		height: 100%;
		background-color: white;
		overflow-y: scroll;
	}
</style>