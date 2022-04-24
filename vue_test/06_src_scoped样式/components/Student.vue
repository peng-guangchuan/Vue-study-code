<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		}
	}
</script>

<style lang="less" scoped>
	// scoped是定义样式为局部样式属性
	// 普通情况下，同样的样式名会覆盖，app中后import的组件内样式覆盖前面的
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
