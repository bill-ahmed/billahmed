<template>
  <div class="project-tile-cotnainer ncol justify-center n-elevation-1">
    <div>
      <div class="nrow">
        <h2>
          {{ details.name }}
        </h2>
        <div class="grow"/>
        <IconButton icon="github" :url="details.github"/>
      </div>
      <hr/>
    </div>

    <div>
      <p> {{details.description}} </p>
    </div>
    <div class="grow" style="margin-top: 20px"/>

    <div class="nrow">
      <b-taglist>
        <b-tag v-for="tag in details.tags" :key="tag" type="is-dark"  size="is-medium">{{tag}}</b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['details'],

  data() {
    return {

    }
  }
}
</script>

<style scoped>
.project-tile-cotnainer {
  padding: 15px;
  margin: 10px;

  background: #424242;
  
  flex-grow: 1;
  max-width: 400px;

  border-radius: 15px;

  /* text-align: center; */
}
</style>