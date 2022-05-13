# Vue3笔记
![](https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png#crop=0&crop=0&crop=1&crop=1&id=EGkMg&originHeight=316&originWidth=357&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
## Vue3简介

- 2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）
- 耗时2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位贡献者](https://github.com/vuejs/vue-next/graphs/contributors)
- github上的tags地址：[https://github.com/vuejs/vue-next/releases/tag/v3.0.0](https://github.com/vuejs/vue-next/releases/tag/v3.0.0)
## Vue3带来了什么
**性能的提升**

-  打包大小减少41% 
-  初次渲染快55%, 更新渲染快133% 
-  内存减少54%
...... 

**源码的升级**

-  使用Proxy代替defineProperty实现响应式 
-  重写虚拟DOM的实现和Tree-Shaking
...... 

**拥抱TypeScript**

- Vue3可以更好的支持TypeScript

**新的特性**

1.  Composition API（组合API） 
   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject
   - ......
2.  新的内置组件 
   - Fragment
   - Teleport
   - Suspense
3.  其他改变 
   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除keyCode支持作为 v-on 的修饰符
   - ......
## 创建Vue3.0工程
### 使用 vue-cli 创建
官方文档：[https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```
### 使用 vite 创建
官方文档：[https://v3.cn.vuejs.org/guide/installation.html#vite](https://v3.cn.vuejs.org/guide/installation.html#vite)
vite官网：[https://vitejs.cn](https://vitejs.cn)

- 什么是vite？—— 新一代前端构建工具。
- 优势如下： 
   - 开发环境中，无需打包操作，可快速的冷启动。
   - 轻量快速的热重载（HMR）。
   - 真正的按需编译，不再等待整个应用编译完成。
- 传统构建 与 vite构建对比图

![](https://cn.vitejs.dev/assets/bundler.37740380.png#crop=0&crop=0&crop=1&crop=1&id=F4tjl&originHeight=1068&originWidth=1918&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)![](https://cn.vitejs.dev/assets/esm.3070012d.png#crop=0&crop=0&crop=1&crop=1&id=cuw1y&originHeight=1030&originWidth=1646&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```
## 常用 Composition API
官方文档: [https://v3.cn.vuejs.org/guide/composition-api-introduction.html](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)
### 拉开序幕的setup

1. 理解：Vue3.0中一个新的配置项，值为一个函数。
1. setup是所有**Composition API（组合API）**“ 表演的舞台 ”。
1. 组件中所用到的：数据、方法等等，均要配置在setup中。
1. setup函数的两种返回值： 
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   1. 若返回一个渲染函数：则可以自定义渲染内容。（了解）
5. 注意点： 
   1. 尽量不要与Vue2.x配置混用 
      - Vue2.x配置（data、methos、computed...）中**可以访问到**setup中的属性、方法。
      - 但在setup中**不能访问到**Vue2.x配置（data、methos、computed...）。
      - 如果有重名, setup优先。
   2. setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
### ref函数

- 作用: 定义一个响应式的数据
- 语法: `const xxx = ref(initValue)` 
   - 创建一个包含响应式数据的**引用对象（reference对象，简称ref对象）**。
   - JS中操作数据： `xxx.value`
   - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
- 备注： 
   - 接收的数据可以是：基本类型、也可以是对象类型。
   - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
   - 对象类型的数据：内部 “ 求助 ” 了Vue3.0中的一个新函数—— `reactive`函数。
### reactive函数

- 作用: 定义一个**对象类型**的响应式数据（基本类型不要用它，要用`ref`函数）
- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个**代理对象（Proxy的实例对象，简称proxy对象）**
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
- 通过reactive定义的数组可以直接下标修改并被响应（vue2需要使用数组操作方法）
### Vue3.0中的响应式原理
#### vue2.x的响应式

-  实现原理： 
   -  对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。 
   -  数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。 
```javascript
Object.defineProperty(data, 'count', {
    get () {}, 
    set () {}
})
```

-  存在问题： 
   - 新增属性、删除属性, 界面不会更新。
   - 直接通过下标修改数组, 界面不会自动更新。
#### Vue3.0的响应式

- 实现原理: 
   - 通过Proxy（代理）:  拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等。
   - 通过Reflect（反射）:  对源对象的属性进行操作。
   - MDN文档中描述的Proxy与Reflect： 
      -  Proxy：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 
      -  Reflect：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 
```javascript
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'
```
### reactive对比ref

- 从定义数据角度对比： 
   - ref用来定义：**基本类型数据**。
   - reactive用来定义：**对象（或数组）类型数据**。
   - 备注：ref也可以用来定义**对象（或数组）类型数据**, 它内部会自动通过`reactive`转为**代理对象**。
- 从原理角度对比： 
   - ref通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
   - reactive通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据。
- 从使用角度对比： 
   - ref定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`。
   - reactive定义的数据：操作数据与读取数据：**均不需要**`.value`。