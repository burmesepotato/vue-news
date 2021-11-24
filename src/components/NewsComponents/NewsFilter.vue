<template>
  <div>
    <BaseInput 
      :label="'Search topic'" 
      :appendIcon="'mdi-minus'" 
      :appendColor="'green'" 
      @input="searchHeadline"
    />
    <BaseDatalist 
      :items="sourceNames" 
      @change="updateSource" 
      :label="'Filter By Source'"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import fetchSearch from '@/helpers/useFetchData';

export default {
  computed: {
    ...mapState({
      sources: (state) => state.headlines.sources
    }),
    sourceNames() {
      return this.sources.map(source => source.name)
    }
  },
  methods: {
    searchHeadline(text) {
      if(text.trim() !== '') {
        setTimeout(() => {
          console.log(text)
        }, 500)
        // fetchSearch(text).then((response) => {
        // console.log('Search response: ', response)
        // })
        
      }
    },
    updateSource(sourceName) {
      this.$store.dispatch('headlines/setSelectedSource', sourceName);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
