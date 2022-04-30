import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})