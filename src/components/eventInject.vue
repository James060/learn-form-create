<template>
  <div class="container">
    <form-create
      v-model="fApi"
      :option="options"
      :rule="rule"
      @prefix1-on-change="change"
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
          field: 'event',
          title: 'change事件',
          emit: [{
            name: 'on-change',
            inject: ['James'],
          }],
          emitPrefix: 'prefix1',
        },
        {
          type: 'input',
          field: 'inputField',
          title: 'blur事件',
          inject: true,
          on: {
            'on-blur': this.blur,
          },
        },
      ],
    };
  },
  methods: {
    change(inject) {
      alert(`change: ${inject.inject}[${inject.$f.getValue('event')}]`);
    },
    blur(inject) {
      alert(`blur: ${inject.self.title}`);
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
