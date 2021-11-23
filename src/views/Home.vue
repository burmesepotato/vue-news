<template>
  <section class="pt-16">
    <v-container>
      <v-row>
        <v-col>
          <NewsFilter />
        </v-col>
      </v-row>
    </v-container>

    <NewsBoard />
  </section>
</template>

<script>
import NewsBoard from '@/components/NewsComponents/NewsBoard.vue';
import NewsFilter from '@/components/NewsComponents/NewsFilter.vue';

export default {
  name: 'Home',

  components: {
    NewsBoard,
    NewsFilter,
  },
};
</script>
