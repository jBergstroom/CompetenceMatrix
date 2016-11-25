<template>
  <div>
    <person></person>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'TestView component'
    }
  },
  computed: {
    persons () {
      return this.$store.state.persons
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
