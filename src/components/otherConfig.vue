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
          field: 'field1',
          title: 'field1',
          value: 'aaa',
        },
        {
          type: 'input',
          field: 'field2',
          title: {
            style: 'color: red',      //自定义title
            title: 'field2',
          },
          value: 'sss',
          wrap: {
            labelWidth: '110',  //通过wrap配置formItem
          },
        },
        {
          type: 'input',
          field: 'f1',
          title: 'f1',
          info: 'info...',
          value: 'info配置',
        },
        {
          type: 'input',
          field: 'f2',
          title: 'f2',
          info: {
            info: 'info...',
            align: 'left',
          },
          value: '配置info',
        },
        {
          type: 'input',
          field: 'f3',
          title: 'f3',
          info: {
            info: 'info...',
            style: 'color: blue',
          },
          value: '配置info',
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
