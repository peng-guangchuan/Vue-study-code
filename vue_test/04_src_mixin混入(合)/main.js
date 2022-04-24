import Vue from 'vue'
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'
Vue.config.productionTip = false

// 全局配置，因为有Root、App、School、Student四个组件，所以mixin里的mounted代码被执行四次
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

new Vue({
	el:'#app',
	render: h => h(App)
})