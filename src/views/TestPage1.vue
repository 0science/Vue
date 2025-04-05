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
      <p>{{ msg5   }}</p>
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
      msg5: "未过滤",
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
      this.msg4 = "已输入内容";
    },
    msg3() {
      this.msg4 = "已调用方法";
    },
    total() {
      this.msg4 = "已计算属性";
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}

h2 {
  margin-top: 0px;
}

.box {
  border: 1px solid #ebebeb;
  padding: 24px;
  margin: 10px;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>