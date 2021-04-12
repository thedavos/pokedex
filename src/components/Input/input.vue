<template>
  <div class="input">
    <div class="input__icon">
      <slot name="left-icon" />
    </div>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="onChangeInput($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokeInput',

  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    modelValue: {
      type: String,
      required: true,
    },
  },

  emits: ['update:modelValue'],

  methods: {
    onChangeInput(value: string) {
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style scoped>
@import './input.css';
</style>
