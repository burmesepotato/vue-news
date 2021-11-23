<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 3"
        :key="n"
        sm="6"
        md="4"
        xl="3"
      >
        <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from '@/components/NewsComponents/NewsCard.vue';

export default {
  components: {
    NewsCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
