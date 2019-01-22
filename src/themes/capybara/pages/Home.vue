<template>
  <div id="home">
    Hello home of Capybara!
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data
  }
}
</script>

<style lang="scss" scoped>
</style>
