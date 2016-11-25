<template>
  <div>
    {{ skills }}
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    skills () {
      console.log(this.$store.state.skills)
    }
  }
}
</script>

<style lang="scss">
</style>
