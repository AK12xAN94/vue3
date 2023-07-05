<template>
  <div class="box">
    <h1>pinia</h1>
    <h2>汽车销售</h2>
    <div class="showCar">
      {{ cars.showCar }}
    </div>
    <div class="container">
      <Child></Child>
      <Child1></Child1>
    </div>
  </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue";
import Child1 from "./Child1.vue";
//vuex:集中式管理状态容器,可以实现任意组件之间通信！！！
//核心概念:state、mutations、actions、getters、modules

//pinia:集中式管理状态容器,可以实现任意组件之间通信！！！
//核心概念:state、actions、getters
//pinia写法:选择器API、组合式API

import carsStore from "@/store/modules/cars";
let cars = carsStore()
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background: skyblue;
}
.container{
  display: flex;
}

.showCar {
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: bold;
  color: aliceblue;
}
</style>