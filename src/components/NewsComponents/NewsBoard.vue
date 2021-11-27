<template>
  <v-container class="py-16">
    <v-row v-if="headlines.length">
      <v-col
        v-for="(headline, $index) in headlines"
        :key="$index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <NewsCard :headline="headline" />
      </v-col>
    </v-row>

    <div 
      v-else 
      class="text-h6 font-weight-light text-center"
    >
      No headline news at the moment.
    </div>
  </v-container>
</template>

<script>
import NewsCard from '@/components/NewsComponents/NewsCard.vue';

export default {
  components: {
    NewsCard,
  },
  props: {
    headlines: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
