<template>
  <div id="app">
    <div class="spacer-5"/>
    <div class="nrow space-between">
      <div class="ncol" style="margin-left: 70px;">
        <div class="nrow">
          <div id="name">
            Bilal Ahmed
          </div>
        </div>

        <div class="nrow" id="short_info">
          <p>
            A <b>Computer Science</b> student at the <br/>
          University of Toronto that's passionate about <br/> 
          <b>web design</b> and <b>software development</b>.
          </p>
        </div>

        <div class="nrow space-evenly">
        </div>
      </div>

      <div class="ncol" style="margin-right: 70px;">
        
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {

}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

#name {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 7rem;
}

#short_info {
  font-size: 1.8rem;
  font-weight: 100;
}
</style>
