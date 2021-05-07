<template>
  <div id="app" class="nrow f-wrap">
    <div class="nrow grow space-around align-center f-wrap">
      <div id="leftContainer" class="ncol align-center">
        <transition appear name="slide-fade">
          <div class="ncol" id="tab-1-content">
            <div class="nrow">
              <AnimatedName/>
            </div>

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
          </div>
        </transition>
      </div>

      <transition appear name="slide-fade">
        <span id="showMoreButton" class="icon-button is-large" @click="showMore()">
          <i class="mdi mdi-chevron-down"/>
        </span>
      </transition>

      <transition appear name="slide-fade-right">
        <div class="ncol" id="rightContent">
          <div class="ncol card-outer-container" style="margin: 50px 0;">
            <div class=" card-title title is-h2"> Projects </div>
          
            <div class="ncol card-container">
              <Projects/>
            </div>
          </div>

          <div class="ncol card-outer-container" style="margin: 50px 0;">
            <div class=" card-title title is-h2"> Experience </div>
          
            <div class="ncol card-container">
              <Experience/>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AnimatedName from '@/components/AnimtedName.vue';
import Projects from '@/components/Projects.vue';
import Experience from '@/components/Experience.vue';

@Component({
  components: {
    Projects,
    AnimatedName,
    Experience
  },
})
export default class App extends Vue {
  tabs = [
    'Projects',
    'Experience (WIP)'
  ]

  selected = this.tabs[0];
  headerOnTop = false;

  handleTabClick(tab: string) {
    this.selected = tab;
  }

  open(url: string) {
    window.open(url, '_blank')
  }

  isSelected(tab: string) {
    return this.selected === tab;
  }

  showMore() {
    document.getElementById('rightContent')?.scrollIntoView({ behavior: 'smooth' });
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
  position: relative;

  #leftContainer {
    height: 100vh;
    padding-top: 25vh;
  }

  #rightContent {
    max-width: 1080px;
    padding: 25px 40px;
  }

  #showMoreButton {
    position: absolute;
    bottom: 25vh;
  }

  .card-outer-container {
    position: relative;

    .card-title {
      position: absolute;

      color: white;
      background: #1B76B4;
      padding: 10px 15px;

      width: max-content;
      
      top: -30px;
      left: -30px;

      border: solid 5px #1B76B4;

      box-shadow: 0px 4px 15px 6px rgba(0, 0, 0, 0.25);
    }
  }

  .card-container {
    background-color: #292929;
    border-radius: 7px;

    box-shadow: 0px 4px 15px 2px rgba(0, 0, 0, 0.25);
  }

  #tab-1-content {
    align-items: flex-start;

    padding: 15px;

    #fullName {
      width: 80vw;
      max-width: 450px;
    }

    #short_info {
      font-size: 1.3rem;
      font-weight: 100;

      max-width: 600px;
    }

    #social_links {
      margin-top: 30px;
      width: 100%;
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

@media only screen and (max-width: 500px) {
  #app {
    .card-title {
      left: -10px;
    }

    #rightContent {
      padding: 25px 15px;
    }
  }
}

@media only screen and (max-width: 900px) {
  #app {
    #leftContainer {
      height: 100vh;
      justify-content: center;

      padding-top: 0;
      padding-bottom: 20vh;

      #tab-1-content {
        align-items: center;
        text-align: center;

        #social_links { justify-content: center; }
      }
    }
  }
}
</style>
