<template>
  <SfSection title-heading="Best Sellers" class="section">
    <SfCarousel class="product-carousel">
      <SfCarouselItem v-for="(product, i) in products" :key="i">
        <SfProductCard
          data-cy="home-url_product"
          :title="product.title"
          :image="product.image"
          :regular-price="product.price.regular"
          :max-rating="product.rating.max"
          :score-rating="product.rating.score"
          :show-add-to-cart-button="true"
          :is-on-wishlist="product.isOnWishlist"
          link="/"
          class="product-card"
          @click:wishlist="toggleWishlist(i)"
        />
      </SfCarouselItem>
    </SfCarousel>
  </SfSection>
</template>

<script>
import {
  SfSection,
  SfCarousel,
  SfProductCard
} from '@storefront-ui/vue';

export default {
  components: {
    SfSection,
    SfCarousel,
    SfProductCard
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
  },
  data () {
    return {
      products: [
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: true
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productC.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productA.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: 'Cream Beach Bag',
          image: '/homepage/productB.jpg',
          price: { regular: '50.00 $' },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        }
      ]
    };
  }
};
</script>
