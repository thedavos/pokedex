<template>
  <div class="loadingLayout">
    <loader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Loader from '../../components/Loader';

export default defineComponent({
  name: 'LoadingLayout',

  components: {
    Loader,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.loadingLayout {
  position: fixed;
  background: var(--color-white);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-50);
}
</style>
