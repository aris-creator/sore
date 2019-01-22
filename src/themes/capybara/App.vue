<template>
  <div id="app" class="flex column">
    <main-header/>
    <router-view/>
    <bottom-navigation/>
  </div>
</template>

<script>
import MainHeader from 'theme/components/MainHeader'
import BottomNavigation from 'theme/components/BottomNavigation'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    MainHeader,
    BottomNavigation
  }
}
</script>

<style lang="scss">
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';
</style>
