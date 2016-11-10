<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <button v-on:click='test(counter)'>Test</button>
    <person></person>
  </div>
</template>

<script>
var counter = 0
var test = function (c) {
  console.log(counter)
  counter++
}

import Person from './Persons'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'TestView component',
      counter: counter,
      test: test
    }
  },
  components: {
    Person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
