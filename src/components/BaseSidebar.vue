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
    <el-menu-item index="page1">
      <i class="el-icon-document"></i>
      <span slot="title">Vue实例</span>
    </el-menu-item>
    <el-menu-item index="page2">
      <i class="el-icon-document"></i>
      <span slot="title">Vue数据绑定</span>
    </el-menu-item>
    <el-menu-item index="page3">
      <i class="el-icon-document"></i>
      <span slot="title">Vue事件</span>
    </el-menu-item>
    <el-menu-item index="page4">
      <i class="el-icon-document"></i>
      <span slot="title">Vue组件</span>
    </el-menu-item>
    <el-menu-item index="page5">
      <i class="el-icon-document"></i>
      <span slot="title">Vue生命周期</span>
    </el-menu-item>
    <el-menu-item index="case1">
      <i class="el-icon-document"></i>
      <span slot="title">学生列表案例</span>
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