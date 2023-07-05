<template>
  <div class="child">
     <h1>我是子组件1</h1>
     <div>money: {{ money }}</div>
     <button @click="updateMoney">updateMoney</button>
     <Child></Child>
  </div>
</template>

<script setup lang="ts">
import Child from './GrandChild.vue';
import { inject } from 'vue';
let money = inject('MONEY');

const updateMoney = () => {
  money.value +=1000
}
</script>

<style scoped>
.child{
  width: 300px;
  height: 400px;
  background: yellowgreen;
}
</style>