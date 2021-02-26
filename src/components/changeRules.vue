<template>
  <div class="container">
    <form-create
      v-model="fApi"
      :option="options"
      :rule="rule"
    ></form-create>
    <h2>操作</h2>
    <p>在表单尾部追加组件</p>
    <ElButton @click="append1">尾部1</ElButton>
    <ElButton @click="append2">尾部2</ElButton>
    <p>在inputNumber组件底部追加组件</p>
    <ElButton @click="set1">inputNumber底部1</ElButton>
    <ElButton @click="set2">inputNumber底部2</ElButton>
    <p>在表单顶部增加组件</p>
    <ElButton @click="append3">顶部1</ElButton>
    <ElButton @click="append4">顶部2</ElButton>
    <p>在input组件顶部增加组件</p>
    <ElButton @click="set3">input顶部1</ElButton>
    <p>删除</p>
    <ElButton @click="remove1">删除第一条规则</ElButton>
    <ElButton @click="remove2">删除表单组件</ElButton>
  </div>
</template>

<script>
export default {
  name: 'eventListen',
  data() {
    return {
      i: 0,
      fApi: {},
      options: {
        submitBtn: false,
        resetBtn: false,
      },
      rule: [
        {
          type: 'inputNumber',
          field: 'number',
          title: '库存',
          value: 0,
        },
        {
          type: 'input',
          field: 'info',
          title: '简介',
          value: '',
          props: {
            type: 'textarea',
          },
        },
      ],
    };
  },
  methods: {
    getRule() {
      this.i++;
      //this.$formCreate.maker.input('title', 'field', 'value')
      return this.$formCreate.maker.input(`追加组件${this.i}`, `input${this.i}`, '');
    },
    append1() {
      this.rule.push(this.getRule());
    },
    append2() {
      this.rule.push(this.getRule());
    },
    set1() {
      this.rule.splice(1,0, this.getRule());
    },
    set2() {
      this.fApi.append(this.getRule(), 'number');
    },
    append3() {
      this.rule.splice(0,0, this.getRule())
    },
    append4() {
      this.fApi.prepend(this.getRule())
    },
    set3() {
      this.fApi.prepend(this.getRule(), 'info')
    },
    remove1() {
      this.rule.splice(0, 1);
    },
    remove2() {
      console.log(this.fApi);
      this.fApi.removeField('input1');
    },
  },
}
</script>

<style scoped>
.container{
  width: 700px;
  margin: 0 auto;
}
</style>
