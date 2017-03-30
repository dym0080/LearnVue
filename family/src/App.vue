<template>
  <div id="app">
    <my-head></my-head>
    <my-nav></my-nav>
    <router-view class="main_content"></router-view>

    <my-mask v-if="canlogin"></my-mask>
    <my-login v-if="canlogin"></my-login>

    <my-foot></my-foot>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
