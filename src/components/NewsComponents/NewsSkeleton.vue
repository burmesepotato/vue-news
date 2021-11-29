<template>
  <v-container class="py-16">
    <v-row>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="6"
        md="4"
      >
        <v-skeleton-loader
          type="image, article"
          class="newsSkeleton"
          dark
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components/newsSkeleton.scss';
</style>