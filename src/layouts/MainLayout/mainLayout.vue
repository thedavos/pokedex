<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style scoped>
.container {
  width: 315px;
  padding: 0 1em;
  margin: auto;
}

@media (min-width: 481px) {
  .container {
    width: 570px;
  }
}
</style>
