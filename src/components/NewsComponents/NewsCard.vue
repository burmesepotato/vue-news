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

    <div class="newsCard__imgWrapper">
      <img :src="headline.urlToImage" :alt="headline.title" class="newsCard__img">

      <svg
      @click="redirectHeadline"
        xmlns="http://www.w3.org/2000/svg"
        width="1920" height="1080" viewBox="0 0 1920 1080" fill="none"
      >
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
          <path
            id="wave-1"
            d="M969.5 1060.5C718 1026.5 323.5 929.5 0 978V0.5H1920V1018C1593.5 1053.5 1481.5 1107.5 969.5 1060.5Z"
            fill="#C4C4C4"
          />
        </clipPath>
      </svg>

      <v-btn
        color="grey darken-4"
        class="newsCard__imgIcon px-2"
        min-width="auto"
        elevation="0"
        @click="openModal"
      >
        <v-icon>
          mdi-square-edit-outline
        </v-icon>
      </v-btn>
    </div>

    <p
      class="deep-purple--text text--accent-1
        text-overline px-5 py-3 mb-1
        font-weight-regular newsCard__source"
    >
      {{ headline.source.name }}
    </p>

    <v-card-title class="py-0 px-5 mb-4 text--white newsCard__title" @click="redirectHeadline">
      {{ headline.title }}
    </v-card-title>

    <v-card-text class="d-flex align-center justify-space-between px-5">
      <div class='grey--text mb-0 font-weight-regular'>{{ date }}</div>
      <v-chip
        v-if="hasVisited"
        color="deep-purple accent-1"
        class="text-caption white--text px-2 py-2 font-weight-light"
        label
        outlined
        x-small
      >
        visited
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import getFriendlyDate from '@/helpers/useDate';
import getSlug from '@/helpers/useSlug';

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
    ...mapState({
      visitedHeadlines: (state) => state.headlines.visitedHeadlines,
    }),
    date() {
      return getFriendlyDate(this.headline.publishedAt);
    },
    hasVisited() {
      return this.visitedHeadlines.has(this.headline.url);
    },
    slug() {
      return getSlug(this.headline.title);
    },
  },
  methods: {
    redirectHeadline() {
      this.$store.dispatch('headlines/setCurrentHeadline', this.headline);
      this.$router.push({ name: 'Headline', params: { slug: this.slug } });
    },
    openModal() {
      this.$store.dispatch('newsModal/setHeadline', this.headline);
      this.$store.dispatch('newsModal/setShowModal', true);
    },
  },
};
</script>

<style lang='scss' scoped>
@use '@/assets/scss/components/newsCard' as *;
</style>
