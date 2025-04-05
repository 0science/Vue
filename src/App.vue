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

body {
  margin: 0;
}
</style>
