<template>
  <div class="container text-center">
    <navbar></navbar>
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
import Competence from './components/Competence'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Competence,
    Navbar
  }
}
</script>

<style lang="sass">
$icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/'
$link-color: #42b983
$brand-success: #42b983
@import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap'
// font awesome
$fa-font-path: '../node_modules/font-awesome/fonts/'
@import 'node_modules/font-awesome/scss/font-awesome'
</style>
