<template>
  <div id="app">
    <main-header/>
    <router-view/>
    <bottom-navigation/>
  </div>
</template>

<script>
import metaInfo from './head'
import MainHeader from 'theme/components/MainHeader'
import BottomNavigation from 'theme/components/BottomNavigation'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  metaInfo,
  components: {
    MainHeader,
    BottomNavigation
  }
}
</script>

<style lang="scss">
@import '~@vue-storefront/core/modules/storefront-ui/css/globals';
@import '~@vue-storefront/core/modules/storefront-ui/css/helpers/visibility';

body {
  margin: 0;
  padding: 0;
}
</style>
