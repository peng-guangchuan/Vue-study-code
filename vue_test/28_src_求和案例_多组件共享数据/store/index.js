import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
	// Count组件需要的操作
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}

const mutations = {
	// Count组件需要的操作
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	},
	// Person组件需要的操作
	ADD_PERSON(state,value){
		console.log('mutations中的ADD_PERSON被调用了')
		state.personList.unshift(value)
	}
}

const state = {
	// Count组件需要的数据
	sum:0,
	school:'尚硅谷',
	subject:'前端',
	// Person组件需要的数据
	personList:[
		{id:'001',name:'张三'}
	]
}

const getters = {
	// Count组件需要的数据处理
	bigSum(state){
		return state.sum*10
	}
}

export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})