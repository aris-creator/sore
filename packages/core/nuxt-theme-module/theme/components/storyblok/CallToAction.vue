<template>
  <SfCallToAction
    :title="content.title"
    :button-text="content.buttonText"
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
