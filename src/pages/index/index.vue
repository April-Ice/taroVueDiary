<template>
  <view class="index">
    <div>111</div>
    <div v-for="(item, index) in list" :key="index">
      {{ index }} {{item.title}}
    </div>
  </view>
</template>

<script>
import "./index.less";
import { fetchList } from "./api.js";

export default {
  data() {
    return {
      msg: "Hello world!",
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      fetchList().then((res) => {
        console.log("----res---", res);
        this.list = res.todoList;
      });
    },
  },
};
</script>
