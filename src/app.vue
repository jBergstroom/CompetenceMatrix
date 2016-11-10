<template>
  <div>
    <img src="./assets/logo.png">
    <competence></competence>
  </div>
</template>

<script>
import Competence from './components/Competence'

export default {
  name: 'app',
  components: {
    Competence
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
}
</style>
