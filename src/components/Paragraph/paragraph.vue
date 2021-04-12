<template>
  <div :class="['paragraph', classes]">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Paragraph',

  props: {
    color: {
      type: String,
      default: 'base',
    },
    size: {
      type: String,
      default: 'md',
    },
    weight: {
      type: String,
      default: 'normal',
    },
    isStriked: {
      type: Boolean,
      default: false,
    },
    isInline: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const state = reactive({
      classes: computed(() => ({
        [`--${props.color}`]: props.color,
        [`--size-${props.size}`]: props.size,
        [`--weight-${props.weight}`]: props.weight,
        '--striked': props.isStriked,
        '--inline': props.isInline,
      })),
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
@import './paragraph.css';
</style>
