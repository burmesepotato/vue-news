<template>
  <section>
    <v-snackbar
      :value="showError"
      fixed
      bottom
      color="deep-purple accent-2"
      right
    >
      {{ errMessage }}
    </v-snackbar>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showError: false,
    };
  },
  computed: {
    ...mapState({
      errMessage: (state) => state.error.message,
    }),
  },
  watch: {
    errMessage() {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 4000);
    },
  },
};
</script>
