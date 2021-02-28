<template>
  <div class="container">
    <form-create
      v-model="fApi"
      :option="options"
      :rule="rule"
    ></form-create>
  </div>
</template>

<script>
export default {
  name: 'eventListen',
  data() {
    return {
      fApi: {},
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
      },
      rule: [
        {
          type: 'input',
          field: 'default',
          title: 'default',
          value: '修改value为组件的title',
          update(val, rule) {
            rule.title = val;
          },
        },
        {
          type: 'input',
          field: 'input1',
          title: 'input1',
          value: '当input2发生变化时触发input1的回调',
        },
        {
          type: 'input',
          field: 'input2',
          title: 'input1',
          link: ['input1'],
          value: '',
          update(val, rule) {
            rule.title = '' + Date.now();
          },
        },
        {
          type: 'input',
          field: 'input3',
          title: '当input值为空时隐藏组件',
          value: 'show',
          update(val) {
            return !val;
          },
        },
      ],
    };
  },
}
</script>

<style scoped>
.container{
  width: 700px;
  margin: 0 auto;
}
</style>
