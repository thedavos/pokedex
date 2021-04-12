<template>
  <section class="pokedex">
    <poke-input class="pokedex__input" v-model="search">
      <template #left-icon>
        <search-icon />
      </template>
    </poke-input>
    <poke-list
      v-if="pokemons && pokemons.length > 0"
      ref="pokeList"
      class="pokedex__list"
      @refresh="onRefresh"
    >
      <poke-item
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        :active="isPokemonActive(pokemon)"
        @click="onCurrentPokemon(pokemon)"
        @favorite="onFavoritePokemon(pokemon)"
      />
    </poke-list>
    <poke-list-empty v-else class="pokedex__list" />
    <teleport to="#bottomBar">
      <bottom-bar
        :is-favorites="isFavorites"
        @to-all="onChangeAll"
        @to-favorites="onChangeFavorites"
      />
    </teleport>
    <teleport to="#modal">
      <modal :open="isOpen" @close="onModalClose">
        <loader rotate v-show="!detailsOpen" />
        <poke-detail
          v-if="currentPokemon"
          v-show="detailsOpen"
          :pokemon="currentPokemon"
          :favorite="isPokemonActive(currentPokemon)"
          @close="onModalClose"
          @loaded="onDetailsLoad"
        />
      </modal>
    </teleport>
  </section>
</template>

<script lang="ts">
import { defineComponent, watchEffect, watch, ref, computed } from 'vue';

import PokeList, { PokeListEmpty } from '../../components/PokeList';
import PokeItem from '../../components/PokeItem';
import PokeInput from '../../components/Input';
import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';
import PokeDetail from '../../components/PokeDetail';
import Loader from '../../components/Loader';
import { SearchIcon } from '../../components/Icon';

import { useLoading } from '../../composables/loading';
import { usePokemonFavorites } from '../../composables/favorites';

import { getAllPokemon, getMorePokemons } from '../../services/pokemon';
import { sleep } from '../../utils/sleep';
import { Pokemon } from '../../models/pokemon';

export default defineComponent({
  name: 'Pokedex',

  components: {
    PokeItem,
    PokeInput,
    SearchIcon,
    PokeList,
    BottomBar,
    Modal,
    PokeDetail,
    PokeListEmpty,
    Loader,
  },

  setup() {
    const currentPokemon = ref<Pokemon | null>(null);
    const search = ref('');
    const detailsOpen = ref(false);
    const isOpen = ref(false);
    const isFavorites = ref(false);
    const offset = ref(20);
    const results = ref<Pokemon[]>([]);
    const {
      favorites,
      onFavoritePokemon,
      isPokemonActive,
    } = usePokemonFavorites();
    const { withLoading } = useLoading();
    const { loading, data, finished } = getAllPokemon();

    watchEffect(() => {
      if (loading.value) {
        withLoading(async () => await sleep(3500));
      }

      if (finished.value) {
        results.value = data.value?.results || [];
      }
    });

    const pokemons = computed(() => {
      if (isFavorites.value) {
        return results.value
          .filter((pokemon) => favorites.value.includes(pokemon.name))
          .filter((pokemon) =>
            pokemon.name.includes(search.value.toLowerCase())
          );
      }

      return results.value.filter((pokemon) =>
        pokemon.name.includes(search.value.toLowerCase())
      );
    });

    const onChangeAll = () => {
      isFavorites.value = false;
    };

    const onChangeFavorites = () => {
      isFavorites.value = true;
    };

    const onCurrentPokemon = (pokemon: Pokemon) => {
      currentPokemon.value = pokemon;
      isOpen.value = !isOpen.value;
    };

    const onModalClose = () => {
      isOpen.value = false;
      detailsOpen.value = false;
    };

    const onRefresh = () => {
      const { data, finished } = getMorePokemons({
        offset: offset.value,
        limit: 20,
      });

      watch(finished, (isFinished) => {
        if (isFinished && data.value) {
          results.value = results.value.concat(data.value.results);

          offset.value += 20;
        }
      });
    };

    const onDetailsLoad = () => {
      detailsOpen.value = true;
    };

    return {
      pokemons,
      search,
      currentPokemon,
      detailsOpen,
      isOpen,
      isFavorites,
      isPokemonActive,
      onFavoritePokemon,
      onCurrentPokemon,
      onChangeFavorites,
      onChangeAll,
      onModalClose,
      onRefresh,
      onDetailsLoad,
    };
  },
});
</script>

<style scoped>
@import './pokedex.css';
</style>
