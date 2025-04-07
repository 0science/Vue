<template>
  <div class="about">
    <div class="box">
      <h2>el根标签</h2>
      <p>{{ msg1 }}</p>
    </div>

    <div class="box">
      <h2>data数据</h2>
      <p>数据：{{ msg2 }}</p>
      <el-input
        v-model="msg2"
        placeholder="请输入内容"
        style="width: 200px"
      ></el-input>
    </div>

    <div class="box">
      <h2>methods方法</h2>
      <p>状态：{{ msg3 }}</p>
      <el-button type="primary" round @click="showInfo">调用</el-button>
      <el-button round @click="resetInfo">重置</el-button>
    </div>

    <div class="box">
      <h2>computed计算属性</h2>
      <div>
        <p>
          单价：<el-input
            v-model="price"
            style="display: inline-block; width: 80px"
          ></el-input>
        </p>
        <p>
          数量：<el-input-number v-model="count" :min="0"></el-input-number>
        </p>
        <p>总价：{{ total }}</p>
      </div>
    </div>

    <div class="box">
      <h2>watch状态监听</h2>
      <p>{{ msg4 }}</p>
    </div>

    <div class="box">
      <h2>filters过滤器</h2>
      <p>过滤前：{{ msg5 }}</p>
      <p>过滤后：{{ msg5 | fix }}</p>  
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      msg1: "Vue实例创建成功",
      msg2: "",
      msg3: "未调用",
      price: 100,
      count: 2,
      msg4: "未监听",
      msg5: 3.1415926,
    };
  },
  methods: {
    showInfo() {
      this.msg3 = "调用成功";
    },
    resetInfo() {
      this.msg3 = "未调用";
    },
  },
  computed: {
    total() {
      return this.price * this.count;
    },
  },
  watch: {
    msg2() {
      this.msg4 = "输入内容已变化";
    },
    msg3() {
      this.msg4 = "方法调用状态已更新";
    },
    total() {
      this.msg4 = "总价计算属性已更新";
    },
  },
  filters: {
    fix(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style>


</style>