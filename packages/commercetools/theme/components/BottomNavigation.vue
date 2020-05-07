<template>
<!-- TODO: create logic with isActive prop for BottomNavigationItems -->
  <SfBottomNavigation class="mobile-only">
    <nuxt-link to="/">
      <SfBottomNavigationItem :class="$route.path == '/' ? 'sf-bottom-navigation__item--active' : ''" icon="home" size="20px" label="Home"/>
    </nuxt-link>
    <SfBottomNavigationItem icon="profile" size="20px" label="Account"/>
    <!-- TODO: add logic for label - if on Home then Basket, if on PDC then AddToCart etc. -->
    <SfBottomNavigationItem @click="toggleCartSidebar" label="Basket" icon="add_to_cart" />
  </SfBottomNavigation>
</template>

<script>
import { SfBottomNavigation, SfIcon, SfCircleIcon } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
const { toggleCartSidebar } = uiState;

export default {
  setup () {
    return {
      toggleCartSidebar
    }
  },
  components: {
    SfBottomNavigation,
    SfIcon,
    SfCircleIcon
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.mobile-only {
  @include for-desktop {
    display: none;
  }
}
</style>