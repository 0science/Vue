<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <BaseSidebar></BaseSidebar>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import BaseSidebar from './components/BaseSidebar.vue'
export default {
  name: 'App',
  components: {
    BaseSidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.box {
  border: 1px solid #ebebeb;
  padding: 24px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
h2 {
  margin-top: 0px;
}
body {
  margin: 0;
}
</style>
