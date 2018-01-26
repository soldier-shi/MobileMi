<template>
	<div class="search">
		<navbar>
			<input type="text" placeholder="搜索商品名称"/>
		</navbar>
		<div style="height: 3.5rem;"></div>
		<hotsearch></hotsearch>
	</div>
</template>

<script>
	import hotsearch from '../components/Search/Hotsearch'
	import navbar from '../components/Kind/Navbar'
	export default{
		name:'search',
		components:{
			navbar,hotsearch
		}
	}
</script>

<style scoped>
	input{
		font-size: 1rem;
		padding: 0.3rem 0.6rem;
		border: none;
		width: 100%;
		outline: none;
	}
</style>