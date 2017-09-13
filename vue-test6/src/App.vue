<!--
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
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
-->


<template>
  <div>
    <div id="method1">
      <p>{{ count < 0 ? '+' : '-'}} {{count + 1}}</p>
      <button @click='count ++'>增加</button>
      <button @click='count --'>减少</button>
    </div>
    <div id="method2">
      <input type="text" v-model='message'>
      <h1>{{ message.split('').reverse().join('') }}</h1>
    </div>
  </div>
  <div>
    <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        count : 0,
        message : ""
      }
    }
  }

</script>
