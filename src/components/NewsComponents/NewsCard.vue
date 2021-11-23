<template>
  <v-card
    :loading='loading'
    class='mx-auto my-12 rounded-lg elevation-11'
    max-width='374'
  >
    <template slot='progress'>
      <v-progress-linear
        color='deep-purple'
        height='10'
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height='200'
      src='https://cdn.vuetifyjs.com/images/cards/cooking.png'
    ></v-img>

    <p class="teal--text text--accent-4 font-weight-bold text-h6">
      The Guardian
    </p>

    <v-card-title class="pt-0 pb-2">
      Biden to address state of US economy as inflation hits 31-year high
      – live - The Guardian
    </v-card-title>

    <v-card-text>
      <div class='grey--text mb-4'>23 November 2021</div>

      <div>
        Small plates, salads & sandwiches - an intimate setting
        with 12 indoor seats plus patio seating.
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>

</style>
