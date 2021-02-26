<template>
  <div class="container">
    <form-create
      v-model="fApi"
      :option="options"
      :rule="rule"
    ></form-create>
    <ElButton type="primary" plain @click="submit">提交</ElButton>
    <ElButton aligen="center" plain @click="reset">重置</ElButton>
  </div>
</template>

<script>
export default {
  name: 'eventListen',
  data() {
    return {
      fApi: {},
      options: {
        submitBtn: false,
      },
      rule: [
        {
          type: 'checkbox',
          field: 'label',
          title: '标签',
          value: [],
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
  methods: {
    submit() {
      this.fApi.submit((formData) => {
        alert(JSON.stringify(formData));
      });
    },
    reset() {
      this.fApi.resetFields();
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
