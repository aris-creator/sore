<template>
    <SfSection :title-heading="content.heading" class="section">
      <SfCarousel class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <nuxt-link data-cy="home-url_product" to="/p/philippemodel-sneakers-grey-red">
            <SfProductCard
              :title="product.title"
              :image="product.image"
              :regular-price="product.price.regular"
              :max-rating="product.rating.max"
              :score-rating="product.rating.score"
              :show-add-to-cart-button="true"
              :is-on-wishlist="product.isOnWishlist"
              class="product-card"
              @click:wishlist="toggleWishlist(i)"
            />
          </nuxt-link>
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
</template>

<script>
import { SfSection, SfCarousel, SfProductCard } from '@storefront-ui/vue';

export default {
  props: ['content'],
  data () {
    return {
      products: [
        {
          title: 'Energy Drink',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: true
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Energy Drink',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        }
      ]
    };
  },
  components: {
    SfSection,
    SfCarousel,
    SfProductCard
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
.product-carousel {
  margin: 0 calc(var(--spacer-xl) * -1) 0 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0;
    --carousel-padding: var(--spacer-xl);
    --carousel-max-width: calc(100% - 13.5rem);
  }
}

.product-card {
  max-width: unset;
}
</style>
