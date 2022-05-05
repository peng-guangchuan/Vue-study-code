import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[ // children设置多级路由，实际中一般最多到三级
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
				}
			]
		}
	]
})
