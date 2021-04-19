<template>
  <div id="app">
    <div class="ncol grow" style="align-items: center;">
      <transition appear name="slide-fade">
        <div class="ncol align-center" id="tab-1-content">
          <div class="nrow">
            <AnimatedName/>
          </div>
          <br/><br/>

          <div id="short_info">
            <p>
              A <b>Computer Science</b> student at the
            University of Toronto that's passionate about
            <b>software development</b> and <b>web design</b>.
            </p>
          </div>

          <div class="nrow" id="social_links">
            <b-button id="github_link" type="is-dark" size="is-medium" rounded icon-left="github" @click="open('https://github.com/bill-ahmed')"/>

            <b-button id="linkedin_link" type="is-dark" size="is-medium" rounded icon-left="linkedin" @click="open('https://www.linkedin.com/in/bill-ahmed')"/>

            <b-button id="resume_link" type="is-dark" size="is-medium" icon-left="download" @click="open('/')">
              My Resume
            </b-button>
          </div>

          <div id="right-nav" class="nrow justify-center">
            <b-button v-for="tab in tabs" :key="tab" 
                      type="is-light"
                      @click="handleTabClick(tab)" 
                      :outlined="!isSelected(tab)"
                      rounded
                      class="b-button" :class="isSelected(tab) ? 'hidden' : ''" size="is-medium">
            {{ tab }}
            </b-button>
          </div>
        </div>
      </transition>

      <transition appear name="slide-fade-fast">
        <Projects v-if="isSelected('Projects')"/>
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
  headerOnTop = false;

  handleTabClick(tab: string) {
    if(tab !== this.selected && (this.selected === this.tabs[0] || tab === this.tabs[0]))
    {
      // Animate going to any other tab from home
      let elem = document.getElementById('tab-1-content');

      elem?.classList.toggle('transition-header');
      elem?.classList.toggle('ncol');
      elem?.classList.toggle('nrow');

      this.headerOnTop = !this.headerOnTop;
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
  background: #1B76B4;
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

    padding: 15px;

    text-align: center;

    #fullName {
      width: 80vw;
      max-width: 550px;
    }

    #short_info {
      font-size: 1.3rem;
      font-weight: 100;

      max-width: 600px;
    }

    #social_links {
      margin-top: 60px
    }
  }

  #right-nav {
    margin-top: 35px;
  }

  .transition-header {
    position: sticky;
    top: 0;
    
    width: 100%;
    // min-width: 280px;

    background: #1E1E1E;
    align-items: center;

    box-shadow: 0px 0px 8px 6px rgba(0, 0, 0, 0.15);
    

    &#tab-1-content {
      margin: 0;
      padding: 10px;
      justify-content: space-around;
      animation: fade-drop .5s ease forwards;

      // flex-wrap: wrap;

      height: 90px;

      #fullName { width: 150px }
      #right-nav { margin: 0; }

      #short_info { display: none; }
      #social_links { display: none; }
    }
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
  transform: translateY(-30px);
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

@keyframes fade-drop {
  0% {
    opacity: 0;
    padding-top: 30px;
  }

  100% {
    opacity: 1;
    padding-top: 10px;
  }
}
</style>
