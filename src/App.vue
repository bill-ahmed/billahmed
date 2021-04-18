<template>
  <div id="app">
    <div class="nrow grow space-between">
      <div v-if="isSelected('Home')" class="ncol" id="tab-1-content" style="margin-left: 70px;">
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

        <div class="nrow" style="margin-top: 50px">
          <b-button type="is-dark" size="is-large" rounded icon-left="github" @click="open('https://github.com/bill-ahmed')">
            
          </b-button>

          <b-button type="is-dark" size="is-large" rounded icon-left="linkedin" @click="open('https://www.linkedin.com/in/bill-ahmed')">
          </b-button>

          <b-button type="is-dark" size="is-large" rounded icon-left="download" @click="open('/')">
            My Resume
          </b-button>
        </div>
      </div>

      <div id="right-nav" class="ncol justify-center">
        <b-button v-for="tab in tabs" :key="tab" 
                  type="is-dark"
                  @click="handleTabClick(tab)" 
                  :outlined="!isSelected(tab)" 
                  class="b-button" :size="isSelected(tab) ? 'is-large' : 'is-medium'">
         {{ tab }}
        </b-button>
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
  tabs = [
    'Home',
    'Projects',
    'Education'
  ]

  selected = this.tabs[0];

  handleTabClick(tab: string) {
    this.selected = tab;
  }

  open(url: string) {
    window.open(url, '_blank')
  }

  isSelected(tab: string) {
    return this.selected === tab;
  }
}
</script>

<style>
.b-button {
  margin: 15px;
}

.button {
  margin-right: 15px;
}

.step-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#right-nav {
  margin-right: 40px;
}

#tab-1-content {
  height: 100%;
  justify-content: center;

  min-width: 600px;
}

#app {
  width: 100%;
  height: 100vh;

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
