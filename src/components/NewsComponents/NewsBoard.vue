<template>
  <v-container class="py-16 text--white">
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
      class="text-h5 font-weight-light text-center py-10"
    >
      No headline news at the moment.
    </div>

    <NewsModal />
  </v-container>
</template>

<script>
import NewsCard from '@/components/NewsComponents/NewsCard.vue';
import NewsModal from '@/components/NewsComponents/NewsModal.vue';

export default {
  components: {
    NewsCard,
    NewsModal,
  },
  props: {
    headlines: {
      type: Array,
      required: true,
    },
  },
};
</script>