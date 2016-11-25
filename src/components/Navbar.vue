<template>
  <nav class="navbar navbar-default">
  <a class="navbar-brand" href="/"> home</a>
  <ul class="nav navbar-nav navbar-right">
    <li>
      <router-link to="/" class="nav-item nav-link"> Home </router-link>
    </li>
    <li>
      <router-link to="/start">Go to Nothing</router-link>
    </li>
    <li>
      <router-link to="/list">Go to List</router-link>
    </li>
    <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
