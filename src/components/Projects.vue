<template>
  <div class="projects-container grow">
    <br/><br/>
    
    <div class="ncol">
      <div class="title is-4 project-title"> Personal </div>

      <div class="nrow f-wrap project-tiles-container">
        <ProjectTile v-for="p in personal" :key="p.name" :details="p"/>
      </div>
    </div>
    <br/>
    <br/>

    <div class="ncol">
      <div class="title is-4 project-title"> Academic </div>

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

<style scoped lang="scss">
.projects-container {
  padding: 25px;
  // min-width: 420px;

  .project-title {
    color: rgba(255, 255, 255, 0.7);
  }
}

@media only screen and (max-width: 1200px) {
  .project-tiles-container {
    justify-content: center;
  }
}
</style>