<template>
    <SfBannerGrid :banner-grid="1" class="section banner-grid">
      <template v-for="item in banners" v-slot:[item.slot]>
        <SfBanner
          :key="item.slot"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :button-text="item.buttonText"
          :image="item.image"
          :class="item.class"
        />
      </template>
    </SfBannerGrid>
</template>

<script>
import { SfBannerGrid, SfBanner } from '@storefront-ui/vue';

export default {
  props: ['content'],
  data () {
    return {
      banners: [{
        slot: 'banner-A',
        subtitle: 'Dresses',
        title: 'Cocktail & Party',
        description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: {
          mobile: '/homepage/bannerB.jpg',
          desktop: '/homepage/bannerF.jpg'
        },
        class: 'sf-banner--slim'
      },
      {
        slot: 'banner-B',
        subtitle: 'Dresses',
        title: 'Linen Dresses',
        description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
        buttonText: 'Shop now',
        image: '/homepage/bannerE.jpg',
        class: 'sf-banner--slim banner-central'
      },
      {
        slot: 'banner-C',
        subtitle: 'T-Shirts',
        title: 'The Office Life',
        image: '/homepage/bannerC.jpg',
        class: 'sf-banner--slim'
      },
      {
        slot: 'banner-D',
        subtitle: 'Summer Sandals',
        title: 'Eco Sandals',
        image: '/homepage/bannerG.jpg',
        class: 'sf-banner--slim'
      }
      ]
    };
  },
  components: {
    SfBannerGrid,
    SfBanner
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.section {
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0;
  }
}
</style>
