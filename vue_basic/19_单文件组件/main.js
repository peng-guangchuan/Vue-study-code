import App from './App.vue' // 浏览器无法直接运行，要在脚手架里

new Vue({
	el: '#root',
	template: `<App></App>`,
	components: { App },
})