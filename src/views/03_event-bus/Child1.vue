<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
    <p>123{{ a }}</p>
  </div>
</template>

<script setup lang="ts">
import $bus from "../../bus";
//组合式API函数
import { onMounted, ref } from "vue";
let a = ref('');
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => {
  //第一个参数:即为事件类型  第二个参数:即为事件回调
  $bus.on("car", (car) => {
    console.log(car);
  });
  $bus.on('msg', (message) => {
    console.log(message)
  });
});
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>