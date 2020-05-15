<template>
    <SfCallToAction
      :title="content.title"
      :button-text="content.button_text"
      :description="content.description"
      image="/homepage/newsletter.jpg"
      class="call-to-action"
    />
</template>

<script>
import { SfCallToAction } from '@storefront-ui/vue';

export default {
  props: ['content'],
  components: {
    SfCallToAction
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.call-to-action {
  margin: var(--spacer-xl) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0 0 0;
  }
}
</style>