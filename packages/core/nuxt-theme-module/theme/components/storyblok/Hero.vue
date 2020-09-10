<template>
  <SfHero class="section">
    <SfHeroItem
      v-for="(hero, i) in content.Heros"
      :key="i"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :button-text="hero.buttonText"
      :background="hero.background"
      :image="hero.image"
    ></SfHeroItem>
  </SfHero>
</template>

<script>
import { SfHero } from '@storefront-ui/vue';

export default {
  props: ['content'],
  components: {
    SfHero
  }
};
</script>
