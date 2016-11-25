<template>
  <div class="container text-area">
    <div class="row">
      <input type="text" v-model="searchText">
    </div>
    <table class="table table-striped">
        <tr>
            <th></th>
            <th v-for="skill in skills">
                {{skill.name}}
            </th>
        </tr>
        <tr v-for="person in textFilter(persons, searchText)">
            <td>{{person.name}}</td>
            <td v-for="skill in person.skills">
                {{skill.points}}
            </td>
        </tr>
    </table>
  </div>
</template>
<script>
import persons from '../data/personal.json'
import Skills from '../data/skills.json'
var searchText = ''
export default {
  name: 'persons',
  data () {
    return {
      persons: persons.ListOfPersons,
      skills: Skills,
      searchText: searchText
    }
  },
  methods: {
    textFilter: function (persons, searchText) {
      return persons.filter(function (person) {
        return person.name.toLowerCase().match(searchText.toLowerCase())
      })
    }
  }
}

</script>


<style lang="scss" scoped>
// .text-area {
//    font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: left;
//   margin-top: 60px;
//   position: relative;
// }

</style>
