<template>
  <div :class="['heading', classes]">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Heading',

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
      default: 'bold',
    },
  },

  setup(props) {
    const state = reactive({
      classes: computed(() => ({
        [`--${props.color}`]: props.color,
        [`--size-${props.size}`]: props.size,
        [`--weight-${props.weight}`]: props.weight,
      })),
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
@import './heading.css';
</style>
