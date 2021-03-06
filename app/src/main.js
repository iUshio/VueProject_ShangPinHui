import Vue from 'vue'
import App from './App.vue'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
// 轮播组件
import Carousel from './components/Carousel'
Vue.component(Carousel.name, Carousel)
// 分页组件
import Pagination from './components/Pagination'
Vue.component(Pagination.name, Pagination)

// 引入mockServe.js---mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

// 引入elementui（按需引入）
import { Button,MessageBox } from 'element-ui'
Vue.component(Button.name, Button)
// 挂载在原型上
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 导入图片
import iDLUT from '@/assets/images/iDLUT.gif'
// 注册插件
Vue.use(VueLazyload,{
  // 懒加载默认图片
  loading:iDLUT
})




//引入路由
import router from '@/router'
// 关闭生产提示
Vue.config.productionTip = false

// 引入仓库
import store from '@/store';

// 统一接口api文件夹里面全部请求函数
// 统一引入
import * as API from '@/api'

new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  //注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性：$store
  store
}).$mount('#app')

// 引入表单校验插件
import '@/plugins/validate'