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
.newsFilter {
  padding: 8rem 0;
  z-index: 10;

  &__grid {
    display: grid;
    grid-gap: 1rem;

    @media screen and (min-width: 759.99px) {
      grid-template-columns: 1fr max-content;
    }
  }

  &__search {
    padding-top: 19.5px;
  }
}

.gradient-background {
  background: linear-gradient(300deg,#311b92,#7c4dff,#311b92);
  background-size: 180% 180%;
  animation: gradient-animation 10s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
