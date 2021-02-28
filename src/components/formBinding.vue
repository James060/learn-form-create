<template>
  <div class="container">
    <p>formData: {{value}}</p>
    <form-create
      v-model="fApi"
      :option="options"
      :rule="rule"
      :value.sync="value"
    ></form-create>
  </div>
</template>

<script>
export default {
  name: 'eventListen',
  data() {
    return {
      fApi: {},
      value: {
        field1: '111',
        field2: '222',
        time: '11:11:11',
      },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
      },
      rule: [
        {
          type: 'input',
          field: 'field1',
          title: 'field1',
          value: 'aaa',
        },
        {
          type: 'input',
          field: 'field2',
          title: 'field2',
          value: 'sss',
        },
        {
          type: 'timePicker',
          field: 'time',
          title: 'time',
          value: '12:12:12',
        },
        {
          type: 'ElButton',
          title: '修改 field1',
          native: false,
          on: {
            click: () => {
              this.rule[0].value += 'a';
            },
          },
          children: ['点击'],
        }
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
