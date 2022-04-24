<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student}
	}
</script>

<style scoped>
	/* app.vue中写样式通常是全布组件使用，不用scoped */
	.title{
		color: red;
	}
</style>
