
import axios from 'axios';

export const base_uri = "https:/pokeapi.co/api/v2"
const value = 0;
export const pokeform = '/pokemon-form'
export const pokemonnumber = 

`/pokemon/${value}`;

export const pokemon = `/pokemon`;
export const filter = [];
export const japanese = 1;
export const english = 9;

export const POKEMON = 'pokemon'

export const getBySpecificElements = `${base_uri}${pokemonnumber}`

export const getAllPokemonByFive = (limit, offset) => {
    let urllimit = `/&limit=${limit}`;
    let urloffset = `/?offset=${offset}`;
    let url = `${base_uri}${pokemon}${urllimit}${urloffset}`;

    return url;
}

export const getPokemonInfo = async (url) => {

}
export const getAllPokemon = `${base_uri}`;