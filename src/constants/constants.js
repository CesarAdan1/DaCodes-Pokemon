
export const base_uri = "https:/pokeapi.co/api/v2"
const value = 0;
export const pokeform = '/pokemon-form'
export const pokemonnumber = `/pokemon/${value}`;
export const pokemon = `/pokemon`;
export const filter = [];
export const japanese = 1;
export const english = 9;
export const limit = `/&limit=${5}`;
export const offset = `/?offset=${0}`;
export const POKEMON = 'pokemon'

export const getBySpecificElements = `${base_uri}${pokemonnumber}`
export const getAllPokemonByFive = `${base_uri}${pokemon}${offset}${limit}`;
export const getAllPokemon = `${base_uri}${pokemon}`;