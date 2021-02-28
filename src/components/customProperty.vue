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
  import formCreate from "@form-create/iview4";

  formCreate.register({
    name: 'option1',
    init(val, rule) {
      setTimeout(() => {
        rule.options.push({label: val, value: val}, {label: val + val, value: val + val});
      }, 300);
    },
  });

  formCreate.register({
    name: 'option2',
    value(val, rule) {
      rule.suffix = val + rule.value;
    },
  });

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
          type: 'select',
          field: 'option',
          title: 'option',
          options: [{label:'default', value:'default'}],
          value: 'default',
          effect: {
            option1: 'aaa',
          },
        },
        {
          type: 'timePicker',
          field: 'time',
          title: 'time',
          value: '',
          effect: {
            option2: 'time: ',
          },
          suffix: 'default',
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
