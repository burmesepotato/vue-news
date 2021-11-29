<template>
  <section id="headline" class="grey darken-4 text--white py-8 py-sm:16">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          offset-md="1"
          md="10"
          offset-lg="2"
          lg="8"
          offset-xl="3"
          xl="3"
        >
          <article v-if="headline" class="headline">
            <h1 class="text-h5 text-sm-h4 font-weight-black mb-4 mb-sm-4 headline__title">
              {{ headline.title }}
            </h1>

            <p
              class="text-subtitle-2 font-weight-light mb-6 d-inline-block"
            >
              {{ getDate(headline.published_at) }}
            </p>
              
            <v-img
              :lazy-src="headline.urlToImage"
              :src="headline.urlToImage"
              class="mb-8 mb-sm-12"
            ></v-img>

            <div class="headline__content text-body-1 text-sm-h6 mb-10">{{ headline.content }}</div>

            <div v-if="headline.url" class="text-subtitle-1 mb-10 font-italic">
              <a :href="headline.url" class="text--white" target="_blank" rel="noopener noreferrer">View the original here</a>.
            </div>

            <div class="d-flex flex-wrap justify-space-between mb-4 mb-sm-8">
              <p 
                v-if="headline.author" 
                class="text-subtitle-1 font-weight-light mb-2 mr-2 font-italic"
              >
                By {{ headline.author }}
              </p>
              

              <v-chip
                v-if="headline.source && headline.source.name"
                color="deep-purple accent-1"
                class="text-caption white--text"
                label
                outlined
              >
                {{ headline.source.name }}
              </v-chip>
            </div>
          </article>

          <article v-else>
            <h1 class="text-h5 text-sm-h4 text-md-h3 font-weight-black text-center">Oops! <span class="d-inline-block">Article not found.</span></h1>
          </article>

          <hr class="separator">

          <div class="text-right">
            <router-link 
              :to="{ name : 'News' }" 
              class="deep-purple--text text--accent-1 text-decoration-none"
            >
              <v-icon color="deep-purple accent-1">mdi-arrow-left-thin</v-icon>
              <span class="ml-2">Back to All Headlines</span>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { getFriendlyDate } from '@/helpers/useDate'

  export default {
    props: {
      slug: {
        type: String,
      },
    },
    created() {
      this.$store.dispatch('headlines/getCurrentHeadline')
      this.$store.dispatch('headlines/setVisitedHeadlines', this.headline.url)
    },
    computed: {
      ...mapState({
        headline: (state) => state.headlines.currentHeadline
      }),
    },
    methods: {
      getDate() {
        return getFriendlyDate(this.headline.publishedAt);
      },
    }
  }
</script>

<style lang="scss" scoped>
@use '@/assets/scss/views/headline' as *;
</style>