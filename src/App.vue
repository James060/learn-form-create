<template>
  <div id="app">
<!--    <eventListen></eventListen>-->
    <eventInject></eventInject>
<!--    <demo></demo>-->
  </div>
</template>

<script>
// import eventListen from '@/components/eventListen.vue';
// import demo from "./components/demo.vue";
import eventInject from "@/components/eventInject.vue";

export default {
  name: 'App',
  components: {
    // eventListen,
    // demo,
    eventInject,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
