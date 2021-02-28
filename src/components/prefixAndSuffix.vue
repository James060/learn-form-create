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
          field: 'text',
          title: 'text',
          value: 'default',
          prefix: 'prefix',
          suffix: 'suffix',
        },
        {
          type: 'timePicker',
          field: 'time',
          title: 'time',
          value: '12:12:12',
          prefix: 'prefix',
          suffix: 'suffix',
        },
        {
          type: 'input',
          field: 'text1',
          title: 'text1',
          value: 'default',
          prefix: {
            type: 'ElButton',
            children: ['prefix'],
            props: {
              loading: true,
            },
          },
          suffix: {
            type: 'ElButton',
            children: ['suffix'],
            props: {
              loading: true,
            },
          },
        },
        {
          type: 'timePicker',
          field: 'time1',
          title: 'time1',
          value: '12:12:12',
          prefix: {
            type: 'ElButton',
            children: ['prefix'],
            props: {
              loading: true,
            },
          },
          suffix: {
            type: 'ElButton',
            children: ['suffix'],
            props: {
              loading: true,
            },
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
