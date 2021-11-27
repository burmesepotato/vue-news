<template>
  <section class="grey darken-4">
    <NewsFilter />
    <NewsBoard :headlines="headlines" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import NewsBoard from '@/components/NewsComponents/NewsBoard.vue';
import NewsFilter from '@/components/NewsComponents/NewsFilter.vue';

export default {
  name: 'Home',
  components: {
    NewsBoard,
    NewsFilter,
  },
  computed: {
    ...mapGetters({
      headlines: 'headlines/filteredHeadlines',
    }),
  },
  created() {
    this.$store.dispatch('headlines/getHeadlines');
    // this.$store.dispatch('headlines/getSources');
  },
};
</script>
