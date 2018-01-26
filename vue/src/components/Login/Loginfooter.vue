<template>
	<div class="loginfooter">
		<div class="login-7" style="color: rgba(0,0,0,.35);">
			<span @click="changecolor(0)" class="loginactive">简体</span>&nbsp;|&nbsp;
			<span @click="changecolor(1)">繁体</span>&nbsp;|&nbsp;
			<span @click="changecolor(2)">English</span>&nbsp;|&nbsp;
			<span @click="changecolor(3)">常见问题</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'loginfooter',
		methods:{
			changecolor(e){
				var spans = document.querySelectorAll('.login-7 span');
				var span = document.querySelectorAll('.login-7 span')[e];
				for (var i = 0; i < spans.length; i++) {
					if (e == i) {
						span.className = 'loginactive'
					} else{
						spans[i].className = ''
					}
				}
			}
		}
	}
</script>

<style scoped>
	.loginfooter{
		width: 100%;
		text-align: center;
		margin-top: 3rem;
	}
.loginactive{
		color: rgba(0,0,0,.88);
	}
</style>