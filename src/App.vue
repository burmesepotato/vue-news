<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-4"
      dark
    >
      <div class="mx-auto">
        <router-link
          :to="{ name: 'News' }"
          class="text-decoration-none d-flex align-center"
        >
          <h1 class="white--text">Vue-News</h1>
        </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <ErrorMessage />
  </v-app>
</template>

<script>
import ErrorMessage from '@/components/UtilComponents/ErrorMessage.vue';

export default {
  name: 'App',
  components: {
    ErrorMessage,
  },
  created() {
    this.$store.dispatch('headlines/getHeadlines');
  },
};
</script>
