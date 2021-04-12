<template>
  <div v-if="open" class="modal">
    <div class="modal__overlay" @click="$emit('close')"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',

  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
@import './modal.css';
</style>
