<template>
		<div>
			<navbar>分类</navbar>
			<div style="height: 3.5rem;"></div>
			<listright></listright>
		</div>
</template>

<script>
    import navbar from '../components/Kind/Navbar'
    import listright from '../components/Kind/Listright'
    export default {
        name: "kinds",
        components:{
          listright,navbar
        }
    }
</script>

<style scoped>
div{
	height: 100%;
	width: 100%;
}
</style>
