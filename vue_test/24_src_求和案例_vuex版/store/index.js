import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被调用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
	// context为默认参数，组件内调用：this.$store.dispatch('jia', value)
	jiaOdd(context, value) { 
		console.log('actions中的jiaOdd被调用了')
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		console.log('actions中的jiaWait被调用了')
		setTimeout(() => {
			context.commit('JIA', value)
		}, 500)
	}
}
// 准备mutations——用于操作数据（state）
const mutations = { // mutations里的方法通常使用全大写命名，如果多单词组合则用下划线_
	// state为默认参数，组件内调用：this.$store.commit('JIA', value)
	JIA(state, value) {
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state, value) {
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	}
}
// 准备state——用于存储数据
const state = { // 插值语法获取：$store.state.sum
	sum: 0 // 当前的和
}

// 创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})