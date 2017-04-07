<template>
  <div id="pageQuiButton">
    <qui-btn v-on:btnClickEvent="doSth1" msg="确定" class="with-icon">
      <img slot="icon" class="ico"/>
    </qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" msg="取消" class="with-icon">
      <img slot="icon" class="ico"/>
    </qui-btn>
  </div>
</template>

<script>
  import quiBtn from '../components/quiButton.vue'

  export default{
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth1: function () {
        alert('1111')
      },
      doSth2: function () {
        alert('2222')
      }
    }
  }
</script>
