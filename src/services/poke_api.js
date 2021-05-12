import { getAllPokemonByFive, getAllPokemon, base_uri } from '../constants/constants';
import axios from 'axios';

export const searchPokemon = async (pokemon) => {
    try {
        let urlPokemon = `${getAllPokemon}/${pokemon}`
        const dataSearch =  await axios.get(urlPokemon)
        return dataSearch;
    } catch(err) {}
}

export const getPokemon = async (limit = 5, offset = 0) => {
    try {
        let urllimit = `/&limit=${limit}`;
        let urloffset = `/?offset=${offset}`;
        let data = `${base_uri}${pokemon}${urllimit}${urloffset}`;
        const full = data.results;
        return console.log("data " + full)

    } catch(err) {}
}

export const getPokemonData = async (urlpokemon) => {
    try {
        let pokeData = await axios.get(urlpokemon);
        return pokeData;
    } catch(err) {}
}