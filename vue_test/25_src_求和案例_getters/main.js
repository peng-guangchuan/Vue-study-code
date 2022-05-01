import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store' // import语句会被优先执行，类似于变量提升

Vue.config.productionTip = false

new Vue({
	el:'#app',
	render: h => h(App),
	store, // 只有Vue.use(vuex)后才可以使用store
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
