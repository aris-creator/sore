<template>
  <div class="store-locator">
    <h2>Store Locator</h2>
    <div class="store-locator__search">
      <div class="store-locator__search-box">
        <SfSearchBar class="store-locator__search-bar" placeholder="Find your store by City or ZIP" />
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
@import "~@storefront-ui/vue/styles";

.store-locator {
  position: relative;
  padding: 20px var(--spacer-base);
  h2 {
      font-size: 2.25rem;
  }
  @include for-desktop {
    h2 {
      margin-left: calc(var(--spacer-xl) * 2); // potentially harmful for perf, get rid of calcs later
    }
  }
}
.store-locator__search {
  @include for-desktop {
    box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08), 1px 10px 10px rgba(102, 62, 51, 0.02);
    border-radius: 60px;
  }
}
.store-locator__search-box {
  @include for-desktop {
    background: var(--bg-secondary);
    padding: 3.25rem calc(var(--spacer-xl) * 2);
    border-radius: 60px;
  }
  @include for-mobile {
    --search-bar-border: 1px solid var(--c-primary);
    --search-bar-border-width: 2px;
    margin-top: 20px;
    box-sizing: initial;
    input {
      border-radius: 34px;
      padding: 20px;
      padding-right: 30px;
      color: black;
      font-weight: bold;
    }
    .sf-search-bar__icon {
      padding-right: 20px;
    }
  }
}
.store-locator__search-results {
  padding: var(--spacer-xl) 0;
}
.store-locator__search-bar {
  @include for-desktop {
    --search-bar-width: 30rem;
    input {
      font-size: 1.2rem;
      line-height: 140.62%;
      color: #1D1F22;
      height: 2.5rem
    }
  }
}
.store-locator__search-pin {
  position: absolute;
  right: var(--spacer-xl);
  top: 0;
  @include for-mobile {
    height: 70px;
    right: var(--spacer-base);
  }
}
</style>
