<template>
  <v-card
    :loading='loading'
    class='mb-4 mx-1 h-full newsCard grey darken-4'
    dark
  >
    <template slot='progress'>
      <v-progress-linear
        color='deep-purple accent-4'
        height='5'
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="newsCard__imgWrapper" @click="redirectHeadline">
      <img :src="headline.urlToImage" :alt="headline.title" class="newsCard__img">
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="1920" height="1080" viewBox="0 0 1920 1080" fill="none"
      >
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
          <path id="wave-1" d="M969.5 1060.5C718 1026.5 323.5 929.5 0 978V0.5H1920V1018C1593.5 1053.5 1481.5 1107.5 969.5 1060.5Z" fill="#C4C4C4"/>
        </clipPath>
      </svg>
    </div>

    <p class="deep-purple--text text--accent-1 text-overline px-5 py-3 mb-1 font-weight-regular newsCard__source">
      {{ headline.source.name }}
    </p>

    <v-card-title class="py-0 px-5 mb-4 text--white newsCard__title" @click="redirectHeadline">
      {{ headline.title }}
    </v-card-title>

    <v-card-text class="px-5">
      <div class='grey--text mb-0 font-weight-regular'>{{ date }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { getFriendlyDate } from '@/helpers/useDate';
import { getSlug } from '@/helpers/useSlug';

export default {
  props: {
    headline: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  computed: {
    date() {
      return getFriendlyDate(this.headline.publishedAt);
    },
  },
  methods: {
    redirectHeadline() {
      let slug = getSlug(this.headline.title);
      console.log('using getSlug', slug);

      this.$store.dispatch('headlines/setCurrentHeadline', this.headline)
      this.$router.push({ name: 'Headline', params: { slug: slug } })
    }
  }
};
</script>

<style lang='scss' scoped>
@use '@/assets/scss/components/newsCard' as *;
</style>
