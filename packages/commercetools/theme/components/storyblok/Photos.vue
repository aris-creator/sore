<template>
  <SfSection :title-heading="content.heading" class="section">
    <div class="grid grid-images">
      <div class="grid__row">
        <div class="grid__col">
          <SfImage :src="content.image_1" :width="486" :height="486">{{ content.image_1_description }}</SfImage>
        </div>
        <div class="grid__col">
          <SfImage :src="content.image_2" :width="486" :height="486">{{ content.image_2_description }}</SfImage>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col">
          <SfImage :src="content.image_3" :width="486" :height="486">{{ content.image_3_description }}</SfImage>
        </div>
        <div class="grid__col">
          <SfImage :src=content.image_4 :width="486" :height="486">{{ content.image_4_description }}</SfImage>
        </div>
      </div>
    </div>
  </SfSection>
</template>
<script>
import {
  SfSection,
  SfImage
} from '@storefront-ui/vue';
export default {
  props: ['content'],
  name: 'InstagramFeed',
  components: {
    SfSection,
    SfImage
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/variables";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.grid {
  max-width: 960px;
  margin: auto;
  &__row {
    display: flex;
    & + & {
      margin-top: calc(var(--spacer-xl) / 2);
      @include for-desktop {
        margin-top: var(--spacer-sm);
      }
    }
  }
  &__col {
    margin: 0;
    flex: 1;
    & + & {
      margin-left: calc(var(--spacer-xl) / 2);
      @include for-desktop {
        margin-left: var(--spacer-sm);
      }
    }
  }
}
</style>
