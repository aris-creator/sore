<template>
  <div class="store-item">
    <img src="logo.svg" />
    <div class="store-item__info">
      <h3>Circle K - 272000</h3>
      <div>300 SaLsbury Ave</div>
      <div>Spencer, NC - 28159</div>
    </div>
    <div class="store-item__opening-hours">
      <h3>Opening Hours</h3>
      <div>Mon-Sun</div>
      <div>5:00AM - 11:00PM</div>
    </div>
    <div class="store-item__facilities">
    </div>
    <div class="store-item__distance">
      <b>200ft</b> away
    </div>
    <SfButton class="store-item__button">Choose this store</SfButton>
  </div>
</template>

<script>
import { SfButton } from '@storefront-ui/vue';

export default {
  components: {
    SfButton
  }
};
</script>

<style lang="scss" scoped>
.store-item {
  display: flex;
  padding: 20px calc(var(--spacer-xl) * 2);
  justify-content: space-between;
  align-items: center;
  line-height: 140.62%;
}
.store-item__info {
  font-size: 0.875rem;
  text-transform: uppercase;
  h3 {
    font-size: 1rem;
  }
}
.store-item__opening-hours, .store-item__opening-hours h3 {
  font-size: 0.875rem;
  font-weight: normal;
  h3 {
    text-transform: uppercase;
  }
}
.store-item__distance {
  font-size: 1.125rem;
  b {
    color: var(--c-primary)
  }
}
.store-item__button {
  background: #F99B2A;
  box-shadow: 4px 12px 24px rgba(119, 121, 122, 0.25);
  border-radius: 24px;
  &:hover {
    background: lighten(#F99B2A, 5%);
  }
}
</style>
