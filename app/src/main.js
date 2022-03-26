import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
// 轮播组件
import Carousel from './components/Carousel'
Vue.component(Carousel.name,Carousel)

// 引入mockServe.js---mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

//引入路由
import router from '@/router'
// 关闭生产提示
Vue.config.productionTip = false

// 引入仓库
import store from '@/store';

// 测试
// import {reqCategoryList} from '@/api';
// reqCategoryList();

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性：$store
  store
}).$mount('#app')