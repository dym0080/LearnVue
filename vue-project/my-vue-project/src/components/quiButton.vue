<template>
  <button class="qui-button" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
  export default {
//      data:function () {
//        return{
//            msg:'下载'
//        }
//      }
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {
      btnClickEvent: function () {
        alert(this.msg)
        // 关键代码父组件触发自定义事件
        this.$emit('btnClickEvent')
      }
    }
  }
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>
