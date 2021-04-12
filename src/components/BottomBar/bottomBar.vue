<template>
  <div class="bottomBar">
    <poke-button @click="$emit('to-all')" :inactive="isFavorites" width="150px">
      <template #left-icon>
        <bars-icon />
      </template>
      All
    </poke-button>
    <poke-button
      @click="$emit('to-favorites')"
      :inactive="!isFavorites"
      width="150px"
    >
      <template #left-icon>
        <favorite-icon width="22px" height="22px" normal />
      </template>
      Favorites
    </poke-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PokeButton from '../Button';
import { BarsIcon, FavoriteIcon } from '../Icon';

export default defineComponent({
  name: 'BottomBar',

  props: {
    isFavorites: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    PokeButton,
    BarsIcon,
    FavoriteIcon,
  },
});
</script>

<style scoped>
@import './bottomBar.css';
</style>
