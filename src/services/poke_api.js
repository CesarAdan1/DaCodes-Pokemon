export const searchPokemon = async (pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const dataSearch =  await fetch(urlPokemon)
        console.log(dataS)
        const dataS = dataSearch.json();
        
        return dataS;
    } catch(err) {
        console.log(err)
    }
}

export const descriptionPokemon = async (id = '') => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
        const description =  await fetch(urlPokemon)
        console.log(description)
        const dataD = description.json();
        
        return dataD;
    } catch(err) {
        console.log(err)
    }
}

export const getAbilityPokemon = async (id = '') => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/ability/${id}`;
        const description =  await fetch(urlPokemon)
        console.log(description)
        const dataD = description.json();
        
        return dataD;
    } catch(err) {
        console.log(err)
    }
}

export const getStatsPokemon = async (id = '') => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/stats/${id}`;
        const description =  await fetch(urlPokemon)
        console.log(description)
        const dataD = description.json();
        
        return dataD;
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

const getAbility =  async( id = '' ) => {

    const request = await fetch( `https://pokeapi.co/api/v2/ability/${ id }` );
    return await request.json();

}

const getStats =  async( id = '' ) => {

    const request = await fetch( `https://pokeapi.co/api/v2/ability/${ id }` );
    return await request.json();

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