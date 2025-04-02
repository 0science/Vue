<template>
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="home">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="about">
      <i class="el-icon-document"></i>
      <span slot="title">关于</span>
    </el-menu-item>
    <el-menu-item index="contact">
      <i class="el-icon-setting"></i>
      <span slot="title">联系</span>
    </el-menu-item>
    <el-menu-item index="hello">
      <i class="el-icon-document"></i>
      <span slot="title">插值语法</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BaseSidebar'
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>