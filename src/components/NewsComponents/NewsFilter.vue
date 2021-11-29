<template>
  <section class="newsFilter gradient-background">
    <v-container>
      <v-row>
        <v-col offset-sm="1" sm="10" offset-lg="2" lg="8">
          <section class="newsFilter__grid">
            <BaseInput 
              :label="'Search topic'" 
              :appendIcon="'mdi-magnify'"
              :appendColor="'white'" 
              @input="searchHeadline"
              class="newsFilter__search"
            />
            <BaseDatalist 
              :items="sourceNames" 
              @change="updateSource" 
              :label="'Filter By Source'"
            />
          </section>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { fetchSearch, displayError } from '@/helpers/useFetchData';
import _ from 'lodash'

export default {
  computed: {
    ...mapState({
      sources: (state) => state.sources.sources
    }),
    sourceNames() {
      return this.sources.map(source => source.name)
    }
  },
  created() {
    this.searchHeadline = _.debounce(this.searchHeadline, 500)
  },
  methods: {
    searchHeadline(text) {
      if(text.trim() !== '') {
        this.$store.dispatch('loader/setLoader', true)
        this.$store.dispatch('headlines/setIsSearching', true)

        fetchSearch(text).then(({data}) => {
          this.$store.dispatch('headlines/setSearchResult', data.articles)
        })
        .catch(displayError)
        .finally(() => {
          this.$store.dispatch('loader/setLoader', false)
        })
      } else {
        this.$store.dispatch('headlines/setIsSearching', false)
      }
    },
    updateSource(sourceName) {
      this.$store.dispatch('sources/setSelectedSource', sourceName);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components/newsFilter.scss';
</style>
