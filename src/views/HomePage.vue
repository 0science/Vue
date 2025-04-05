<template>
  <div class="home">
    <h1>Vue学习笔记</h1>
    <h2>入门</h2>
    <el-button type="primary">环境配置</el-button>
    <el-button type="primary">环境配置</el-button>
    <el-button type="primary">环境配置</el-button>
    <h2>基础</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column prop="name" label="姓名" > </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>    
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
}
</script>

<style scoped >
.home {
  padding: 20px;
}


</style>