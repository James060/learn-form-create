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
          type: 'rate',
          field: 'star',
          title: '评分',
          value: 5,
          control: [
            {
              handle(val) {
                return val < 3;
              },
              rule: [
                {
                  type: 'input',
                  field: 'info',
                  title: '差评原因',
                  value: 'default info',
                },
              ],
            },
          ],
        },
        {
          type: 'input',
          field: 'input1',
          title: 'input1',
          value: '',
        },
        {
          type: 'input',
          field: 'input2',
          title: 'input2',
          value: '',
        },
        {
          type: 'input',
          field: 'input3',
          title: 'input3',
          value: '',
          control: [
            {
              handle: (val) => !!val,
              append: 'input1',
              rule: [
                {
                  type: 'input',
                  field: 'input4',
                  title: 'input4',
                  value: '',
                },
              ],
            },
          ],
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
