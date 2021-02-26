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
        global: {
          'input': {
            props: {
              disabled: true,
            },
          },
        },
      },
      rule: [
        {
          type: 'input',
          field: 'input1',
          title: 'input1',
        },
        {
          type: 'input',
          field: 'input2',
          title: 'input2',
        },
        {
          type: 'input',
          field: 'input3',
          title: 'input3',
        },
        {
          type: 'input',
          field: 'input4',
          title: 'input4',
        },
        {
          type: 'inputNumber',
          field: 'inputNumber',
          title: '数字',
        },
      ],
    };
  },
}
</script>

<style scoped>
.container{
  /*width: 700px;*/
  margin: 0 auto;
}
</style>
