# Vue 学习笔记

## 一、创建一个Vue项目

### 1.安装Node.js和npm

node.js是一个基于Chrome V8引擎的JavaScript运行时环境，用于开发Web应用程序。

npm是Node.js的包管理工具，用于安装、更新和卸载Node.js的依赖包。

- 从npm下载别人编好的第三方包到本地使用
- 编写npm包上传到npm服务器

npm命令
```
npm install : 安装依赖包
npm install - g : 全局安装依赖包
npm install - save : 本地安装依赖包并保存到package.json
npm update : 更新依赖包
npm uninstall : 卸载依赖包

```

### 2.配置npm镜像

```
# 官方 NPM 镜像站 
npm config set registry https://registry.npmjs.org

# 淘宝 NPM 镜像站
npm config set registry https://registry.npmmirror.com

# 查看当前镜像
npm config get registry
```

### 3.安装Vue Cli脚手架

Vue Cli用于创建和管理Vue项目

```
# 安装 vue-cli
npm install -g @vue/cli

# 检查 vue-cli 版本
vue -V

# 出现版本号则安装成功
@vue/cli 5.0.8
```

```
# 安装错误时,强制安装
npm install -g @vue/cli --force
```

### 4.创建Vue2项目 "vue-test"

```
# 创建名为 vue-test 的项目
vue create vue-test

# 选择Default ([Vue 2] babel, eslint)

# 启动项目
cd vue-test
npm install
npm run serve

# 访问 http://localhost:8080/
```

出现下图则创建成功

![image-20250404093531588](https://image.dingjm.top/course/image-20250404093531588.png)

## 二、Vue2项目结构

### 1.整体项目结构

项目分为4部分

- 根目录文件
- node_modules
- src
- public

```
vue-test
├── .git
├── node_modules
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
└── vue.config.js
```

### 2.根目录文件

| 文件名             | 描述                     |
|--------------------|--------------------------|
| .gitignore         | git忽略文件              |
| babel.config.js    | babel配置文件            |
| jsconfig.json      | js配置文件               |
| package-lock.json  | 依赖包版本信息           |
| package.json       | 依赖包版本信息           |
| vue.config.js      | vue配置文件              |
| README.md          | 项目说明文档             |

### 3.node_modules

node_modules目录是npm安装的依赖包，包含了项目所需的所有依赖包。

### 4.public

public目录是Vue项目的静态资源目录，包含了Vue项目的所有静态资源，如图片、字体等。

### 5.src

src目录是Vue项目的源代码目录，包含了Vue项目的所有组件、模板、样式等资源。

| 文件/目录   | 描述                                   |
|------------|----------------------------------------|
| App.vue    | 项目的根组件，是整个Vue项目的入口文件。 |
| components | 组件目录，包含了Vue项目的所有组件。     |
| main.js    | 项目的入口文件，是Vue项目的启动文件。   |
| assets     | 静态资源目录，包含了Vue项目的所有静态资源，如图片、字体等。 |

### 6.main.js


创建Vue应用实例并将其关联到页面上的#app容器

```js
import Vue from 'vue'
import App from './App.vue'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  render: h => h(App),//h是createElement的简写，用于创建虚拟节点,h(App)将App组件渲染为根组件
}).$mount('#app') //将Vue实例挂载到DOM元素上
```

### 7.App.vue

定义Vue应用的根容器，定义组件名称，注册子组件名称

体现了Vue核心：

- 组件化开发
- 单文件组件（.vue文件）结构
- 组件间通信（通过props传递数据）

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 8.HelloWorld.vue

定义一个名为HelloWorld的组件，接收一个名为msg的属性，并使用插值表达式在模板中渲染该属性的值。

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

## 三、Vue实例

### 1.Vue配置选项

Vue实例是Vue的核心，它封装了数据和视图的逻辑，并实现了数据绑定和组件化开发。

|选项|说明|
|--|--|
|el|vue实例的根元素，用于挂载vue实例|
|data|vue实例的数据对象，用于存储和操作数据| 
|methods|vue实例的方法，用于封装业务逻辑|
|computed|vue实例的计算属性，用于对数据进行计算和缓存|
|watch|vue实例的监听器，用于监听数据变化并执行回调函数|
|template|vue实例的模板，用于定义视图结构|
|components|vue实例的子组件，用于定义子组件|
|props|vue实例的属性，用于传递数据给子组件|
|filters|vue实例的过滤器，用于对数据进行格式化|

### 2.el根标签

el 根标签用于挂载vue实例，它接受一个字符串参数，表示要挂载的DOM元素的选择器。

### 3.data数据

data数据用于存储和操作数据，它接受一个函数，返回一个对象，用于定义vue实例的数据。

### 4.methods方法

methods方法用于封装业务逻辑，它接受一个函数，返回一个对象，用于定义vue实例的方法。

### 5.computed计算属性

computed计算属性用于对数据进行计算和缓存，它接受一个函数，返回一个对象，用于定义vue实例的计算属性。

### 6.watch监听器

watch监听器用于监听数据变化并执行回调函数，它接受一个函数，返回一个对象，用于定义vue实例的监听器。

### 7.filters过滤器

filters过滤器用于对数据进行格式化，它接受一个函数，返回一个对象，用于定义vue实例的过滤器。

## 四、Vue数据绑定

|指令	|描述|
|--|--|
|v-bind|绑定数据|
|v-model|双向绑定数据|
|v-on|绑定事件|
|v-for|循环渲染列表|
|v-if|条件渲染|
|v-show|条件渲染（切换显示）|
|v-text|文本绑定|
|v-html|HTML绑定（渲染HTML内容）|

## 五、Vue事件



## 六、Vue组件



## 七、Vue生命周期

|钩子阶段|可操作DOM|典型用途示例|
|--|--|--|
|created|	否	|初始化数据、API请求|
|mounted|	是	|DOM操作、第三方库初始化|
|updated|	是	|响应数据变化后的DOM更新|
|unmounted|	否	|清理资源（如定时器）|
		
# Vue2 实战

## 一、基础入门

### 1.配置Vue环境

### 2.实现登录界面

## 二、Vue基础

### 1.比较两个数字大小

### 2.简单网页计算器

### 3.实现导航栏(vm.$slots)

### 4.实现登录界面(插件)

# Vue 问答

## 一、基础入门

### 1.什么是Vue

### 2.Vue有哪些优点

### 3.Vue与Reacct的区别

