<template>
  <div class="hello">
    <h1>Select a competence</h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="skill in skills"><router-link to="/skill/2">{{skill.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import skills from '../data/skills.json'
export default {
  name: 'competenceselector',
  data () {
    return {
      skills: skills
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
