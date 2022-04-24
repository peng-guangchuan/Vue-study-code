<template>
	<div>
		<!-- v-bind 让age里的值编程JS表达式执行 -->
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
