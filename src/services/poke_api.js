import axios from 'axios';

export const searchPokemon = async (pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const dataSearch =  await axios.get(urlPokemon)
       return dataSearch;
    } catch(err) {
        console.log(err)
    }
}

export const searchImgPokemon = async (pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon-form`;
        const img =  await axios.get(urlPokemon)
       return img;
    } catch(err) {
        console.log(err)
    }
}

export const getPokemon = async (limit = 5, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url)
        const data = await response.json()
        //importconsole.log(dataPokemon5.data.results.url.sprites)
        console.log(data)
        
        return data;

    } catch(err) {
        console.log(err)
    }
}

export const getPokemonData = async (urlpokemon) => {
    try {
        let pokeData = await fetch(urlpokemon);
        const dataDes = await pokeData.json();
        return dataDes;
    } catch(err) {
        console.log(err)
    }
}