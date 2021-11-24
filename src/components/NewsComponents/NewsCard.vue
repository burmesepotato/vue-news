<template>
  <v-card
    :loading='loading'
    class='mx-auto my-12 rounded-lg elevation-11'
    max-width='374'
  >
    <template slot='progress'>
      <v-progress-linear
        color='teal accent-4'
        height='5'
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height='200'
      :src='headline.urlToImage'
    ></v-img>

    <p class="teal--text text--accent-4 font-weight-bold text-h6">
      {{ headline.source.name }}
    </p>

    <v-card-title class="pt-0 pb-2">
      {{ headline.title }}
    </v-card-title>

    <v-card-text>
      <div class='grey--text mb-4'>{{ date }}</div>

      <div>
        {{ headline.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
// import useDate from '@/helpers/useDate';
import getFriendlyDate from '@/helpers/useDate';

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
    }, 2000);

    // const { getFriendlyDate } = useDate();
  },
  computed: {
    date() {
      return getFriendlyDate(this.headline.publishedAt);
    },
  },
};
</script>

<style lang='scss' scoped>

</style>
