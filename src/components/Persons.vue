<template>
    <table class="text-area">
        <tr>
            <th></th>
            <th v-for="skill in skills">
                {{skill.name}}
            </th>
        </tr>
        <tr v-for="person in persons">
            <td class="table-cell">{{person.name}}</td>
            <td class="table-cell" v-for="skill in person.skills">
                {{skill.points}}
            </td>
        </tr>
    </table>
</template>
<script>
import persons from '../data/personal.json'
import Skills from '../data/skills.json'

export default {
  name: 'persons',
  data () {
    return {
      persons: persons.ListOfPersons,
      skills: Skills
    }
  }
}

</script>


<style lang="scss" scoped>
.text-area {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: red;
  margin-top: 60px;
  position: relative;
  left: 500px;
}

.table-cell {
      border: solid 1px black;
  }
</style>