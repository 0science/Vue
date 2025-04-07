<template>
  <div>
    <h2>学生列表案例</h2>
    <div>
      <el-button type="primary" round @click="add">添加</el-button>
      <el-button type="primary" round @click="del">删除</el-button>
    </div>
    <div class="table">
      <table border="1" cellspacing="0" cellpadding="10 20">
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
        </tr>
        <tr v-for="(item,index) in students" :key="index">
          <td>{{ item.index }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      students:[]
    }
  },
  methods:{
    add(){
      var student = { index:'1',name:'张三',sex:'男',age:'18' }
      this.students.push(student)
    },
    del(){
      this.students.pop()
    }
  }
}
</script>

<style>
.table{
  margin-top: 20px;
}
</style>