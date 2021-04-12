interface PokemonParams {
  name: string;
  url: string;
}

export interface Pokemon extends PokemonParams {}

export interface PokemonAbility extends PokemonParams {}

export interface PokemonForms extends PokemonParams {}

export interface PokemonGameIndex {
  game_index: number;
  version: PokemonParams;
}

export interface PokemonTypes {
  slot: number;
  type: PokemonParams;
}

export interface PokemonAbilities {
  ability: PokemonAbility;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonOfficialArtwork {
  front_default: string;
}

export interface PokemonSpriteOther {
  'official-artwork': PokemonOfficialArtwork;
}

export interface PokemonSprite {
  back_default: string;
  front_default: string;
  other: PokemonSpriteOther;
}

export interface PokemonDetail {
  abilities: PokemonAbilities[];
  base_experience: number;
  forms: PokemonForms[];
  game_indices: PokemonGameIndex[];
  types: PokemonTypes[];
  sprites: PokemonSprite;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  weight: number;
}

export interface PokemonResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
