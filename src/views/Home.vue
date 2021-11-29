<template>
  <section id="news" class="grey darken-4">
    <NewsFilter />
    <NewsBoard v-if="!isLoading" :headlines="headlines" />
    <NewsSkeleton v-else />
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import NewsBoard from '@/components/NewsComponents/NewsBoard.vue';
import NewsFilter from '@/components/NewsComponents/NewsFilter.vue';
import NewsSkeleton from '@/components/NewsComponents/NewsSkeleton.vue';

export default {
  name: 'Home',
  components: {
    NewsBoard,
    NewsFilter,
    NewsSkeleton,
  },
  computed: {
    ...mapGetters({
      headlines: 'headlines/filteredHeadlines',
    }),
    ...mapState({
      isLoading: (state) => state.loader.isLoading,
    }),
  },
  created() {
    this.$store.dispatch('sources/getSources');
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/views/news' as *;
</style>
