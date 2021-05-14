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
        console.log(img)
       return img;
    } catch(err) {
        console.log(err)
    }
}

export const getPokemon = async (limit = 5, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const dataPokemon5 = await axios.get(url)
        //importconsole.log(dataPokemon5.data.results.url.sprites)

        console.log(dataPokemon5.data.results.map((res) =>(
            res.url
        )))
        return dataPokemon5;

    } catch(err) {
        console.log(err)
    }
}

export const getPokemonData = async (urlpokemon) => {
    try {
        let pokeData = await axios.get(urlpokemon);

        return pokeData;
    } catch(err) {
        console.log(err)
    }
}