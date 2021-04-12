import { toRefs } from 'vue';
import { useAxios } from '@vueuse/integrations';
import { instance } from '../config/api';

import { PokemonResult, PokemonDetail } from '../models/pokemon';

interface GetAllPokemonVariables {
  offset: number;
  limit?: number;
}

export const getAllPokemon = () => {
  const result = useAxios<PokemonResult>(
    '/pokemon',
    {
      method: 'GET',
    },
    instance
  );

  return result;
};

export const getPokemonDetail = (name: string) => {
  const result = useAxios<PokemonDetail>(
    `/pokemon/${name}`,
    {
      method: 'GET',
    },
    instance
  );

  return result;
};

export const getMorePokemons = ({ offset }: GetAllPokemonVariables) => {
  const result = useAxios<PokemonResult>(
    `/pokemon?offset=${offset}&limit=20`,
    {
      method: 'GET',
    },
    instance
  );

  return result;
};
