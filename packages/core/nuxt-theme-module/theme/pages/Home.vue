<template>
  <div id="home">
    <component :is="c.component" v-for="c in story.content.body" :content="c" :key="c._uid"/>
  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfBannerGrid
} from '@storefront-ui/vue';
import InstagramFeed from '~/components/InstagramFeed.vue';
import Hero from '~/components/storyblok/Hero.vue';
import Banners from '~/components/storyblok/Banners.vue';
import BestSellers from '~/components/storyblok/BestSellers.vue';
import CallToAction from '~/components/storyblok/CallToAction.vue';
import Banner from '~/components/storyblok/Banner.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Hero,
    Banners,
    BestSellers,
    CallToAction,
    InstagramFeed,
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfBannerGrid
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => res.data)
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({ statusCode: 404, message: 'Failed to receive content form api' });
        } else {
          console.error(res.response.data);
          context.error({ statusCode: res.response.status, message: res.response.data });
        }
      });
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/vue/styles";

.banner {
  margin-top: 60px;
  background-color: lightgray;
}

#home {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.section {
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0;
  }
}
.banner-grid {
  margin: var(--spacer-xl) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.banner-central {
  @include for-desktop {
    --banner-container-flex: 0 0 70%;
  }
}
.call-to-action {
  margin: var(--spacer-xl) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0 0 0;
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
.images-grid {
  max-width: 60rem;
  margin: 0 auto;
  &__row {
    display: flex;
    & + & {
      margin: calc(var(--spacer-xl) / 2) 0 0 0;
      @include for-desktop {
        margin: var(--spacer-xl) 0 0 0;
      }
    }
  }
  &__col {
    flex: 1;
    margin: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
      @include for-desktop {
        margin: 0 0 0 var(--spacer-xl);
      }
    }
  }
}
</style>
