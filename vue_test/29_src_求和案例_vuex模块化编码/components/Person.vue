<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="color:red">Count组件求和为：{{sum}}</h3>
		<h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
		<input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
		<button @click="addWang">添加一个姓王的人</button>
		<button @click="addPersonServer">添加一个人，名字随机</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{p.name}}</li>
		</ul>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'Person',
		data() {
			return {
				name:''
			}
		},
		computed:{
			personList(){
				return this.$store.state.personAbout.personList
			},
			sum(){
				return this.$store.state.countAbout.sum
			},
			firstPersonName(){
				// 需要使用数组['xxx']方式获取getters对象里的属性，因为符号“/”无法使用在“.”操作符后
				return this.$store.getters['personAbout/firstPersonName']
			}
		},
		methods: {
			add(){
				const personObj = {id:nanoid(),name:this.name}
				// 指定格式为“命名空间/函数名”
				this.$store.commit('personAbout/ADD_PERSON',personObj)
				this.name = ''
			},
			addWang(){
				const personObj = {id:nanoid(),name:this.name}
				// 指定格式为“命名空间/函数名”
				this.$store.dispatch('personAbout/addPersonWang',personObj)
				this.name = ''
			},
			addPersonServer(){
				this.$store.dispatch('personAbout/addPersonServer')
			}
		},
	}
</script>
