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
          type:'input',
          title:'col24',
          field:'col24_1',
        },
        {
          type:'input',
          title:'col12',
          field:'col12_1',
          col:{
            span:12,
          },
        },
        {
          type:'input',
          title:'col12',
          field:'col12_2',
          col:{
            span:12,
          },
        },
        {
          type:'input',
          title:'col8',
          field:'col8_1',
          col:{
            span:8,
          },
        },
        {
          type:'input',
          title:'col8',
          field:'col8_2',
          col:{
            span:8,
          },
        },
        {
          type:'input',
          title:'col8',
          field:'col8_3',
          col:{
            span:8,
          },
        },
        {
          type:'input',
          title:'col8|offset8',
          field:'col8_8',
          col:{
            span:8,
            offset:8,
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
