<template>
  <transition name="fade">
    <loading-layout v-if="loading"></loading-layout>
  </transition>
  <router-view></router-view>
  <div id="bottomBar"></div>
  <div id="modal"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoading } from './composables/loading';

import LoadingLayout from './layouts/LoadingLayout';

export default defineComponent({
  name: 'App',

  components: {
    LoadingLayout,
  },

  setup() {
    const { loading } = useLoading();

    return {
      loading,
    };
  },
});
</script>

<style scoped>
#bottomBar {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: var(--z-index-30);
}

#modal {
  position: fixed;
  z-index: var(--z-index-40);
}
</style>
