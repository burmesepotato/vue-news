<template>
  <v-autocomplete
    v-model="value"
    :items="items"
    clearable
    filled
    :label="label"
    @change="updateValue"
    dark
    
  ></v-autocomplete>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: 'Select',
    },
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    updateValue() {
      this.$emit('change', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
