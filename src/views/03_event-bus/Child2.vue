<template>
  <div class="child2">
     <h2>我是子组件2:曹丕</h2>
     <button @click="handler">点击我给兄弟送一台法拉利</button>
     <button @click="sendMsg">sendMsg</button>
  </div>
</template>

<script setup lang="ts">
//引入$bus对象
import $bus from '../../bus';
//点击按钮回调
const handler = ()=>{
  $bus.emit('car',{car:"法拉利"});
}
const sendMsg = () => {
  $bus.emit('msg', '送我一句话');
}
</script>

<style scoped>
.child2{
  width: 300px;
  height: 300px;
  background: skyblue;
}
</style>