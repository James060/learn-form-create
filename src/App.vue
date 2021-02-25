<template>
  <div id="app">
    <eventListen></eventListen>
  </div>
</template>

<script>
import eventListen from '@/components/eventListen.vue';

export default {
  name: 'App',
  components: {
    eventListen,
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
