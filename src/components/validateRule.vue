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
          field: 'name',
          title: '名称',
          validate: [{
            type: 'string',
            required: true,
            message: '请输入名称',
          }],
        },
        {
          type: 'checkbox',
          field: 'label',
          title: '标签',
          value: ['fast'],
          options: [
            {label: '好用', value: 'useful'},
            {label: '快速', value: 'fast'},
            {label: '高效', value: 'efficiency'},
            {label: '全能', value: 'all-around'},
          ],
          validate: [{
            type: 'array',
            min: 2,
            required: true,
            message: '至少选择2个',
          }],
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
