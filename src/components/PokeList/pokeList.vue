<template>
  <section ref="pokeList" class="pokeList">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { templateRef } from '@vueuse/core';

export default defineComponent({
  name: 'PokeList',

  setup(_, { emit }) {
    const pokeList = templateRef('pokeList');

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const onScroll = () => {
      let element = pokeList.value;

      if (
        element &&
        element.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        emit('refresh');
      }
    };

    return {};
  },
});
</script>

<style scoped>
@import './pokeList.css';
</style>
