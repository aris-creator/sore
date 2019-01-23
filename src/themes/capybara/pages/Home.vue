<template>
  <div id="home">
    Hello home of Capybara!
    <vsf-button>Yo</vsf-button>
  </div>
</template>

<script>
import VsfButton from '@vue-storefront/core/modules/storefront-ui/components/Button/Button.vue'

export default {
  components: {
    VsfButton
  },
  computed: {
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data
  }
}
</script>

<style lang="scss" scoped>
</style>
