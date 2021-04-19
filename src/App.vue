<template>
  <div id="app">
    <div class="ncol grow" style="padding: 0 35px;">
      <transition appear name="slide-fade">
        <div class="ncol grow" id="tab-1-content">
          <div class="nrow">
            <AnimatedName/>
          </div>

          <div class="nrow" id="short_info">
            <p>
              A <b>Computer Science</b> student at the <br/>
            University of Toronto that's passionate about <br/> 
            <b>software development</b> and <b>web design</b>.
            </p>
          </div>

          <div class="nrow" id="social_links">
            <b-button id="github_link" type="is-dark" size="is-large" rounded icon-left="github" @click="open('https://github.com/bill-ahmed')"/>

            <b-button id="linkedin_link" type="is-dark" size="is-large" rounded icon-left="linkedin" @click="open('https://www.linkedin.com/in/bill-ahmed')"/>

            <b-button id="resume_link" type="is-dark" size="is-large" rounded icon-left="download" @click="open('/')">
              My Resume
            </b-button>
          </div>
        </div>
      </transition>

      <transition appear name="slide-fade-fast">
        <Projects v-if="isSelected('Projects')" style="max-width: 85vw;"/>
      </transition>

      <div class="grow-3"/>

      <transition appear name="slide-fade-right">
        <div id="right-nav" class="ncol justify-center">
          <b-button v-for="tab in tabs" :key="tab" 
                    type="is-dark"
                    @click="handleTabClick(tab)" 
                    :outlined="!isSelected(tab)" 
                    class="b-button" :size="isSelected(tab) ? 'is-large' : 'is-medium'">
          {{ tab }}
          </b-button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Projects from '@/components/Projects.vue';
import AnimatedName from '@/components/AnimtedName.vue';

@Component({
  components: {
    Projects,
    AnimatedName
  },
})
export default class App extends Vue {
  tabs = [
    'Home',
    'Projects'
  ]

  selected = this.tabs[0];

  handleTabClick(tab: string) {
    if(tab !== this.selected && (this.selected === this.tabs[0] || tab === this.tabs[0]))
    {
      // Animate going to any other tab from home
      let elem = document.getElementById('tab-1-content');

      elem?.classList.toggle('transition-header');
      elem?.classList.toggle('ncol');
      elem?.classList.toggle('nrow');
    }
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

<style lang="scss">
:root {
  --animation_delay: 0.3s;
  --animation_delay_last: 0.5s;
}

#github_link:hover, #linkedin_link:hover, #resume_link:hover {
  color: #1B76B4;
}

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

#app {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  #tab-1-content {
    height: 100%;
    justify-content: center;

    min-width: 600px;

    padding-bottom: 15vh;
    margin-left: 10%;

    transition: all .5s ease;

    #short_info {
      font-size: 1.8rem;
      font-weight: 100;
    }

    #social_links {
      margin-top: 50px
    }
  }

  #right-nav {
    position: absolute;
    
    top: 0;
    bottom: 0;
    right: 30px;
  }

  .transition-header {
    // flex-direction: row;

    &#tab-1-content {
      margin: 0;
      padding: 10px;

      height: 100px;

      #fullName { width: 300px; }
      #social_links {
        margin: 10px;
      }
    }

    #short_info { display: none; }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: none;
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(-30px);
  opacity: 0;
}


.slide-fade-right-enter-active {
  transition: all .8s ease;
}
.slide-fade-right-leave-active {
  transition: none;
  opacity: 0;
}
.slide-fade-right-enter {
  transform: translateX(30px);
  opacity: 0;
}


.slide-fade-fast-enter-active {
  transition: all .3s ease;
}
.slide-fade-fast-leave-active {
  transition: none;
  opacity: 0;
}
.slide-fade-fast-enter {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
