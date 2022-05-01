//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
// 引入vuex里的count模块
import countOptions from './count'
// 引入vuex里的person模块
import personOptions from './person'
//应用Vuex插件
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
	modules:{ // 注意使用modules
		// countAbout和personAbout也可以直接在index.js定义成对象，然后像下面一样使用
		countAbout:countOptions, 
		personAbout:personOptions
	}
})

// export default new Vuex.Store({
// 	actions,
// 	mutations,
// 	state,
// 	getters
// })