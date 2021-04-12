<template>
  <div v-if="pokemonDetail" class="pokeDetail">
    <picture class="pokeDetail__picture">
      <img class="pokeDetail__cover" :src="PokemonBackground" alt="" />
      <img
        class="pokeDetail__sprite"
        :src="getOfficialArtwork(pokemonDetail.sprites.other)"
        alt="Pokemon Official Artwork"
        @load="onOfficialArtworkLoad"
      />
    </picture>
    <div class="pokeDetail__items">
      <div class="pokeDetail__item">
        <paragraph is-inline weight="medium" size="sm">Name: &nbsp;</paragraph>
        <paragraph is-inline size="sm">{{
          capitalize(pokemon.name)
        }}</paragraph>
      </div>
      <div class="pokeDetail__divider"></div>
      <div class="pokeDetail__item">
        <paragraph is-inline weight="medium" size="sm"
          >Weight: &nbsp;</paragraph
        >
        <paragraph is-inline size="sm">{{ pokemonDetail.weight }}</paragraph>
      </div>
      <div class="pokeDetail__divider"></div>
      <div class="pokeDetail__item">
        <paragraph is-inline weight="medium" size="sm"
          >Height: &nbsp;</paragraph
        >
        <paragraph is-inline size="sm">{{ pokemonDetail.height }}</paragraph>
      </div>
      <div class="pokeDetail__divider"></div>
      <div class="pokeDetail__item">
        <paragraph is-inline weight="medium" size="sm">Types: &nbsp;</paragraph>
        <paragraph is-inline size="sm">{{ types }}</paragraph>
      </div>
      <div class="pokeDetail__divider"></div>
    </div>
    <div class="pokeDetail__bottom">
      <poke-button class="pokeDetail__button" @click="copy(clipboard)"
        >Share to my friends</poke-button
      >
      <favorite-icon
        class="pokeDetail__favorite"
        :active="favorite"
        @click="onFavoritePokemon(pokemon)"
      />
    </div>
    <div class="pokeDetail__close" @click="$emit('close')">
      <close-icon />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from 'vue';
import { useClipboard } from '@vueuse/core';

import Paragraph from '../Paragraph';
import PokeButton from '../Button';
import { FavoriteIcon, CloseIcon } from '../Icon';

import { getPokemonDetail } from '../../services/pokemon';
import { Pokemon, PokemonSpriteOther } from '../../models/pokemon';
import { usePokemonFavorites } from '../../composables/favorites';
import { capitalize } from '../../utils/capitalize';

import PokemonBackground from '../../assets/pokemon_background.png';

export default defineComponent({
  name: 'PokeDetail',

  components: {
    Paragraph,
    PokeButton,
    FavoriteIcon,
    CloseIcon,
  },

  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      default: () => {},
    },

    favorite: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const { data: pokemonDetail } = getPokemonDetail(props.pokemon.name);
    const { onFavoritePokemon } = usePokemonFavorites();
    const { copy } = useClipboard();

    const types = computed(() =>
      pokemonDetail.value?.types
        .reduce((acum, { type }) => `${acum}, ${capitalize(type.name)}`, '')
        .substring(1)
        .trim()
    );

    const clipboard = computed(
      () =>
        `${props.pokemon.name}, ${pokemonDetail.value?.weight}, ${pokemonDetail.value?.height}, ${types.value}`
    );

    const getOfficialArtwork = (other: PokemonSpriteOther) => {
      return other['official-artwork'].front_default;
    };

    const onOfficialArtworkLoad = () => {
      emit('loaded');
    };

    return {
      pokemonDetail,
      PokemonBackground,
      capitalize,
      types,
      copy,
      clipboard,
      onFavoritePokemon,
      onOfficialArtworkLoad,
      getOfficialArtwork,
    };
  },
});
</script>

<style scoped>
@import './pokeDetail.css';
</style>
