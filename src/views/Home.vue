<template>
  <section id="news" class="grey darken-4">
    <NewsFilter />
    <NewsBoard v-if="!isLoading" :headlines="displayHeadlines" />
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
      isSearching: (state) => state.headlines.isSearching,
      searchResults: (state) => state.headlines.searchResults,
    }),
    displayHeadlines() {
      if(this.isSearching) return this.searchResults
      else return this.headlines
    }
  },
  created() {
    this.$store.dispatch('sources/getSources');
  },
};
</script>

<style lang="scss" scoped>
#news {
  height: 100%;
}
</style>