<template>
  <v-text-field 
    :label="label" 
    :required="required" 
    @input="updateValue"
    :inputmode="inputmode"
    dark
  >
    <v-icon
      slot="prepend"
      :color="prependColor"
    >
      {{ prependIcon }}
    </v-icon>
    <v-icon
      slot="append"
      :color="appendColor"
    >
      {{ appendIcon }}
    </v-icon>
  </v-text-field>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
      },
      required: {
        type: Boolean,
        default: false
      },
      appendIcon: {
        type: String,
        default: ''
      },
      appendColor: {
        type: String,
        default: 'black'
      },
      prependIcon: {
        type: String,
        default: ''
      },
      prependColor: {
        type: String,
        default: 'black'
      },
      inputmode: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      updateValue(value) {
        this.$emit("input", value);
      },
    }
  }
</script>