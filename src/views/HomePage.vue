<template>
  <div class="home">
    <h1>Vue学习笔记</h1>
    <div class="box2">
        <router-link :to="getLink(item)" class="item" v-for="(item,index) in notes" :key="index" > {{ item }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      notes: ['HTML+CSS', 'JavaScript', 'Vue', '可视化', 'Uniapp', 'NodeJS', 'Webpack', 'TypeScript', ],
      links: [
        { name: 'Vue基础', url: '/page2' },
        { name: 'Vue组件', url: '/page3' },
        { name: 'Vue路由', url: '/vue-router' },
        { name: 'Vue状态管理', url: '/vue-state-management' },
        { name: 'Vue项目实战', url: '/vue-project-practice' },
        { name: 'Vue生态', url: '/vue-ecosystem' },
        { name: 'Vue进阶', url: '/vue-advanced' },
        { name: 'Vue源码解析', url: '/vue-source-code' },
        { name: 'Vue性能优化', url: '/vue-performance-optimization' }
      ]
    };
  },
  methods: {
    getLink(note) {
      const link = this.links.find(link => link.name === note);
      return link ? link.url : '/';
    }
  }
}
</script>

<style scoped >
.home {
  padding: 20px;
}

.box2{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
  justify-content: center;
}

.item{
  text-decoration: none;
  padding: 20px;
  background: #afafaf;
  /* background: #e0e0e0; */
  /* box-shadow: 1px 5px 60px 0px #4646466b; */
 /* box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff; */
  border-radius: 15px;
  text-align: center;
  /* height: 160px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 28px;
  color: #fff;
}


</style>