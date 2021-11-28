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

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
  created() {
    this.$store.dispatch('headlines/getHeadlines');
  },
};
</script>
