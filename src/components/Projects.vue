<template>
  <div class="projects-container grow">
    <div class="ncol">
      <h1> Personal Projects </h1>
      <br/>

      <div class="nrow f-wrap project-tiles-container">
        <ProjectTile v-for="p in personal" :key="p.name" :details="p"/>
      </div>
    </div>
    <br/>
    <br/>

    <div class="ncol">
      <h1> Academic Projects </h1>
      <br/>

      <div class="nrow f-wrap project-tiles-container">
        <ProjectTile v-for="p in academic" :key="p.name" :details="p"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectTile from './shared/ProjectTile.vue';
import * as ProjectData from './shared/ProjectData.json';

export default {
  components: {
    ProjectTile
  },
  data() {
    let projects = ProjectData.projects;

    let personal = projects.filter((p) => p.type === 'personal');
    let academic = projects.filter((p) => p.type === 'academic');

    return {
      personal,
      academic
    }
  }
}
</script>

<style scoped>
.projects-container {
  padding: 25px;
  width: 85%;
  min-width: 420px;
}

@media only screen and (max-width: 1200px) {
  .project-tiles-container {
    justify-content: center;
  }
}
</style>