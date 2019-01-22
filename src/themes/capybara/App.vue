<template>
  <div id="app" class="flex column">
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from 'theme/components/MainHeader'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';
</style>
