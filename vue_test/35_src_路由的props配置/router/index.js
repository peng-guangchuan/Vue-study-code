import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:Detail,

							// props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件，要写props:['xxx']进行接收。
							// props:{a:1,b:'hello'}

							// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
							// props:true

							// props的第三种写法，值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
							props($route){ // 接收route作为参数
								return {
									id:$route.query.id, // 解决布尔值不能传query参数
									title:$route.query.title,
									a:1,
									b:'hello'
								}
							}

						}
					]
				}
			]
		}
	]
})
