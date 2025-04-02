<template>
  <div id="root">
    <h1>插值语法</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column prop="name" label="姓名" > </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
  methods: {
    change() {
      this.msg = "Hello Vue";
    },
  },
};
</script>

<style scoped>
</style>