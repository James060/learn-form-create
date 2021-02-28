<template>
  <div id="app">
<!--    <eventListen></eventListen>-->
<!--    <eventInject></eventInject>-->
<!--    <customLayout></customLayout>-->
<!--    <validateRule></validateRule>-->
<!--    <changeDefaultButton></changeDefaultButton>-->
<!--    <globalSet></globalSet>-->
<!--    <changeRules></changeRules>-->
<!--    <setSlot></setSlot>-->
<!--    <componentsLink></componentsLink>-->
<!--    <updateCallback></updateCallback>-->
<!--    <prefixAndSuffix></prefixAndSuffix>-->
<!--    <customProperty></customProperty>-->
    <formBinding></formBinding>
<!--    <demo></demo>-->
  </div>
</template>

<script>
// import eventListen from '@/components/eventListen.vue';
// import demo from "./components/demo.vue";
// import eventInject from "@/components/eventInject.vue";
// import customLayout from "@/components/customLayout.vue";
// import validateRule from "@/components/validateRule.vue";
// import changeDefaultButton from "@/components/changeDefaultButton.vue";
// import globalSet from "@/components/globalSet.vue";
// import changeRules from "@/components/changeRules.vue";
// import setSlot from "@/components/setSlot.vue";
// import componentsLink from "@/components/componentsLink.vue";
// import updateCallback from "@/components/updateCallback.vue";
// import prefixAndSuffix from "@/components/prefixAndSuffix.vue";
// import customProperty from "@/components/customProperty.vue";
import formBinding from '@/components/formBinding.vue';

export default {
  name: 'App',
  components: {
    // eventListen,
    // demo,
    // eventInject,
    // customLayout,
    // validateRule,
    // changeDefaultButton,
    // globalSet,
    // changeRules,
    // setSlot,
    // componentsLink,
    // updateCallback,
    // prefixAndSuffix,
    // customProperty,
    formBinding,
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
