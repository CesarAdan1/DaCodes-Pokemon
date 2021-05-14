import { getAllPokemonByFive, getAllPokemon, base_uri } from '../constants/constants';
import axios from 'axios';

export const searchPokemon = async (pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const dataSearch =  await axios.get(urlPokemon)
        return console.log(dataSearch);
    } catch(err) {}
}

export const getPokemon = async (limit = 5, offset = 0) => {
    try {
        let data = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const full = data
        return console.log("data " + full)

    } catch(err) {}
}

export const getPokemonData = async (urlpokemon) => {
    try {
        let pokeData = await axios.get(urlpokemon);
        return pokeData;
    } catch(err) {}
}