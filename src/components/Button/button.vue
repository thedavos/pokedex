<template>
  <button :class="['button', inactive && '--disabled']" :style="{ width }">
    <div class="button__icon--left">
      <slot name="left-icon" />
    </div>
    <div class="button__content">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',

  props: {
    inactive: {
      type: Boolean,
      default: false,
    },

    width: {
      type: String,
      default: 'auto',
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
@import './button.css';
</style>
