<template>
   <SfBanner
    class="banner"
    :title="content.title"
    :subtitle="content.subtitle"
    :description="content.description"
    :button-text="content.buttonText"
    :image="content.background.filename"
  />
</template>

<script>
import { SfBanner } from '@storefront-ui/vue';

export default {
  // this part comes from Visual Builder
  props: ['content'],
  components: {
    SfBanner
  }
};
</script>
