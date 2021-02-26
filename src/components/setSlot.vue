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
        submitBtn: false,
        resetBtn: false,
      },
      rule: [
        {
          type: 'el-button',
          children: ['方式1'],
        },
        {
          type: 'el-button',
          children: [{
            type: 'i',
            class: 'el-icon-check'
          }, '方式2'],
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
