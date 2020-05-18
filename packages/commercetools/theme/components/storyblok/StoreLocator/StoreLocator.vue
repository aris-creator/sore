<template>
  <div class="store-locator">
    <h2>Store Locator</h2>
    <div class="store-locator__search">
      <div class="store-locator__search-box">
        <SfSearchBar class="store-locator__search-bar"/>
      </div>
      <div class="store-locator__search-results">
      <StoreItem />
      </div>
    </div>
    <img class="store-locator__search-pin" src="/homepage/locator-pin.svg" />

  </div>
</template>

<script>
import { SfSearchBar } from '@storefront-ui/vue';
import StoreItem from './StoreItem';

export default {
  components: {
    SfSearchBar,
    StoreItem
  }
};
</script>

<style lang="scss">
.store-locator {
  position: relative;
  h2 {
    margin-left: calc(var(--spacer-xl) * 2); // potentially harmful for perf, get rid of calcs later
  }
}
.store-locator__search {
  box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08), 1px 10px 10px rgba(102, 62, 51, 0.02);
  border-radius: 60px;
}
.store-locator__search-box {
  background: var(--bg-secondary);
  padding: calc(var(--spacer-xl) * 2);
  border-radius: 60px;
  display: flex;
}
.store-locator__search-bar {
  --search-bar-width: 30rem;
}
.store-locator__search-pin {
  position: absolute;
  right: var(--spacer-xl);
  top: 0;
}
</style>
