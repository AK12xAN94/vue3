<template>
  <div class="child">
    <h3>钱数:{{ toSon.money }},车辆数:{{ toSon.cars }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
//接受props
let props = defineProps(["toSon"]);
console.log('666', props);
let $emit = defineEmits(['update:toSonValue']);
//子组件内部按钮的点击回调
const handler = ()=>{
   //触发自定义事件
   $emit('update:toSonValue',props.toSon.money+1000);
   $emit('update:toSonValue',props.toSon.cars+2);
}
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>