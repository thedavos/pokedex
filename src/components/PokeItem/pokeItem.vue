<template>
  <div class="pokeItem">
    <paragraph is-inline>
      {{ capitalize(pokemon.name) }}
    </paragraph>
    <favorite-icon :active="active" @click="onFavorite" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Paragraph from '../Paragraph';
import { FavoriteIcon } from '../Icon';

import { Pokemon } from '../../models/pokemon';

import { capitalize } from '../../utils/capitalize';

export default defineComponent({
  name: 'PokeItem',

  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    Paragraph,
    FavoriteIcon,
  },

  setup(_, { emit }) {
    const onFavorite = (event: Event) => {
      event.stopPropagation();

      emit('favorite');
    };

    return {
      capitalize,
      onFavorite,
    };
  },
});
</script>

<style scoped>
@import './pokeItem.css';
</style>
