<template>
	<div>
		<h3>姓名： {{name}}</h3>
		<h3>年龄： {{age}}</h3>
	</div>
</template>

<script>
	export default {
		//data:function(){..}  es5写法
		data () {
			return {
				name: 'Lucy',
				age: 26
			}
		}
	}
</script>

<style scoped>
	div{
		text-align: center;
	};	
	h3 {
		color: #ccc;
	}
</style>
