<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommand></Recommand>
    <Rank></Rank>
    <Like></Like>
    <!-- Floor组件这个组件：自己在组件内部是没有发送请求的，数据是父组件给的 -->
    <Floor v-for="floor in floorList" :key="floor.id" :List="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
//引入其余的组件
import ListContainer from "./ListContainer";
import Recommand from "./Recommend";
import Rank from "./Rank";
import Like from './Like';
import Floor from './Floor'
import Brand from './Brand'

import {mapState} from 'vuex'

export default {
  name: "Home",
  mounted() {
    console.log("主页");
    this.$store.dispatch("getFloorList");
    
  },
  components: {
    ListContainer,
    Recommand,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
};
</script>