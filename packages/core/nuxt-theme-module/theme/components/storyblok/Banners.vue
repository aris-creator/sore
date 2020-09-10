<template>
  <SfBannerGrid :banner-grid="1" class="section banner-grid">
    {{ content }}
    <template v-for="item in content.banners" v-slot:[item.slot[0]]>
      <SfBanner
        :key="item.slot[0]"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description"
        :button-text="item.buttonText"
        :image="item.image"
        class="sf-banner--slim"
      />
    </template>
  </SfBannerGrid>
</template>

<script>
import {
  SfBanner,
  SfBannerGrid
} from '@storefront-ui/vue';

export default {
  components: {
    SfBannerGrid,
    SfBanner
  },
  props: ['content']
};
</script>
