<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    {{ switchValue }}
    <custom-switch v-model="switchValue"></custom-switch>
    <dashboard></dashboard>
  </div>
</template>

<script>
import CustomSwitch from './packages/switch/index.js'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    CustomSwitch,
    Dashboard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      switchValue: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
