<template>
  <span class="icon is-medium" @click="open()">
    <i :class="'mdi mdi-' + icon"/>
  </span>
</template>

<script>
export default {
  props: ['icon', 'url'],
  data() {
    return {

    }
  },
  methods: {
    open() {
      this.url && window.open(this.url, '_blank')
    }
  }
}
</script>

<style scoped>
.icon {
  font-size: 2.5rem;
  cursor: pointer;
}
</style>