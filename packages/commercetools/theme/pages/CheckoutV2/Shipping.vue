<template>
  <div>
    <SfHeading
      :level="3"
      :title="$t('Shipping')"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <ShippingForm
      :handleShippingAddressSubmit="saveShippingAddress"
      @submit="$router.push('/checkout/payment')"
    />
  </div>
</template>

<script>
import {
  SfHeading
} from '@storefront-ui/vue';
import { useShipping } from '@vue-storefront/commercetools';
import { onSSR } from '@vue-storefront/core';
import ShippingForm from '@/components/Checkout/ShippingForm';

export default {
  name: 'Shipping',
  components: {
    SfHeading,
    ShippingForm
  },
  setup () {
    const {
      save,
      load
    } = useShipping();

    onSSR(async () => {
      await load();
    });

    return {
      saveShippingAddress: save
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
}
</style>
