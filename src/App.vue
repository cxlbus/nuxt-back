<template>
  <div id="app">
    <nuxt-back></nuxt-back>
  </div>
</template>

<script>
  import NuxtBack from "./lib/nuxt-back";

  export default {
    name: 'app',
    components: {NuxtBack},
    data() {
      return {
        msg: ''
      }
    }
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
    height: 2000px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
