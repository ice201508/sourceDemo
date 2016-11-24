<template>
	<div class="contain">
		<p>Vue内容 --> {{message}}</p>
		<div>
			<ul>
				<li v-for="(v, k) in arr">{{k}} --> {{v}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	let arr = [1,2,3,4].map(x=> x*x*x);
	console.log(arr);

	//module.exports = {
	export default {
		name: 'app',
		data () {
			return {
				message: "message in app.vue",
				arr : [1,2,3,4].map(x=> x*x*x)
			}
		} 
	}
</script>

<style scoped>
	.contain {
		font-size: 18px;
		text-align: center;
		padding: 100px 30px;
	}
	ul {
		list-style-type: none;
	}
</style>
