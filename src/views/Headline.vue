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
            <h1 class="text-h5 text-sm-h4 font-weight-black mb-4 mb-sm-6 headline__title">{{ headline.title }}</h1>

            <div class="d-flex flex-wrap justify-space-between mb-4 mb-sm-8">
              <h2 v-if="headline.author" class="text-subtitle-1 font-weight-light mb-4 mr-2 font-italic">
                By {{ headline.author }}
              </h2>
              <h3 class="text-subtitle-2 font-weight-light">{{ getDate(headline.published_at) }}</h3>
            </div>
              
            <v-img
              :lazy-src="headline.urlToImage"
              :src="headline.urlToImage"
              class="mb-8 mb-sm-12"
            ></v-img>

            <div class="headline__content text-body-1 text-sm-h6 mb-10">{{ headline.content }}</div>

            <div class="text-subtitle-1 mb-10 font-italic">
              <span class="mr-1">See original</span>
              <a :href="headline.url" class="text--white" target="_blank" rel="noopener noreferrer">here</a>.
            </div>

            <v-chip
              color="deep-purple accent-1"
              class="white--text"
              label
              outlined
            >
              {{ headline.source.name }}
            </v-chip>
          </article>

          <article v-else>
            <h1 class="text-h5 text-sm-h4 text-md-h3 font-weight-black text-center">Oops! <span class="d-inline-block">Article not found.</span></h1>
          </article>

          <hr class="separator">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFriendlyDate } from '@/helpers/useDate'

  export default {
    props: {
      slug: {
        type: String,
      }
    },
    computed: {
      ...mapGetters({
        headline: 'headlines/detailHeadline',
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
#headline {
  height: 100%;
}

.headline {
  &__title {
    line-height: 1.3;
  }

  &__content {
    font-weight: 400;
    line-height: 1.8;
    text-align: justify;
  }
}
</style>