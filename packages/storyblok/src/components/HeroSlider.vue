<template>
    <SfHero class="section">
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :button-text="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
      ></SfHeroItem>
    </SfHero>
</template>

<script>
import { SfHero } from '@storefront-ui/vue';

export default {
  props: ['content'],
  data () {
    return {
      heroes: [
        {
          title: 'Find nearest Circle K pick up store',
          subtitle: 'CIRCLE K PICK UP',
          buttonText: 'Find on map',
          background: '#eceff1',
          image: '/homepage/bannerH.jpg'
        },
        {
          title: 'Find nearest Circle K pick up store',
          subtitle: 'CIRCLE K PICK UP',
          buttonText: 'Find on map',
          background: '#efebe9',
          image: '/homepage/bannerA.jpg',
          className:
            'sf-hero-item--position-bg-top-left sf-hero-item--align-right'
        }
      ]
    };
  },
  components: {
    SfHero
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