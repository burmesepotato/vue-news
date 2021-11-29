<template>
  <v-dialog
    class="newsModal"
    v-model="showModal"
    max-width="500"
  >
    <v-card color="grey darken-4">
      <v-card-title
        class="text-h6 deep-purple--text text--accent-1 mb-4"
      >
        Edit Headline Title
      </v-card-title>

      <v-card-text class="text-body-1 font-weight-light text--white">
        <v-textarea
          dark
          label="Headline Title"
          auto-grow
          :counter="wordLimit"
          outlined
          rows="2"
          row-height="15"
          v-model="newTitle"
        ></v-textarea>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          dark
          color="deep-purple accent-1"
          text
          @click="closeModal"
        >
          Cancel
        </v-btn>
        <v-btn
          dark
          color="deep-purple accent-1"
          text
          @click="updateHeadline"
          :disabled="disabled"
        >
          Save Changes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      newTitle: '',
      wordLimit: 120,
    };
  },
  watch: {
    headline(newVal) {
      if (newVal) {
        this.newTitle = this.headline.title;
      }
    },
  },
  computed: {
    ...mapState({
      showModal: (state) => state.newsModal.showModal,
      headline: (state) => state.newsModal.headline,
    }),
    disabled() {
      return this.newTitle.length > this.wordLimit;
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch('newsModal/setShowModal', false);
    },
    updateHeadline() {
      this.headline.title = this.newTitle;

      this.$store.dispatch('headlines/updateHeadlineTitle', this.headline);
      this.$store.dispatch('newsModal/setShowModal', false);
    },
  },
};
</script>
