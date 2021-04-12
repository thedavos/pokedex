import { useLocalStorage } from '@vueuse/core';

import { Pokemon } from '../models/pokemon';

const favorites = useLocalStorage<string[]>('favorites', []);

function usePokemonFavorites() {
  const onFavoritePokemon = (pokemon: Pokemon) => {
    if (!favorites.value.includes(pokemon.name)) {
      favorites.value.push(pokemon.name);
    } else {
      const index = favorites.value.indexOf(pokemon.name);
      favorites.value.splice(index, 1);
    }
  };

  const isPokemonActive = (pokemon: Pokemon) => {
    return favorites.value.includes(pokemon.name);
  };

  return {
    favorites,
    onFavoritePokemon,
    isPokemonActive,
  };
}

export { usePokemonFavorites };
