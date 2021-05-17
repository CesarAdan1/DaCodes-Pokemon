export const searchPokemon = async (pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const dataSearch =  await fetch(urlPokemon)
        const dataS = dataSearch.json();
        return dataS;
    } catch(err) {
        console.log(err)
    }
}

export const getPokemon = async (limit = 5, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url)
        const data = await response.json()
       // console.log(data)
        
        return data;

    } catch(err) {
        console.log(err)
    }
}

export const getLanguage = async(pokeurl, id = '') => {
    try {
        let pokeData = await fetch(urlpokemon);
        const dataDes = await pokeData.json();
        return dataDes;
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