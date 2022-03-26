<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  mounted() {
    // 通过vuex发送请求，获取数据，存储于仓库中（TypeNav使用）
    this.$store.dispatch("categoryList");
  },
  components: {
    Header,
    Footer,
  },
};
</script>

