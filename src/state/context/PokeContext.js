import React, { createContext, useState, useEffect } from 'react';
import { searchPokemon, getPokemon, getPokemonData } from '../../services/poke_api';

export const PokeContext = createContext();

const PokemonProvider = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    useEffect(() => {
            // const urlPokemon = getAllPokemon;

            // const pokemonOne = await axios.get(urlPokemon);
            // setPokemon(pokemonOne.data.results);
            setPokemon(getPokemon(pokemon))
        console.log(setPokemon(getPokemon(pokemon)))
        //getPokemon();
    }, [pokemon]);

    return (
        <PokeContext.Provider
            value={{
                pokemon
            }}
        >
            {props.children}
        </PokeContext.Provider>
    )
}

export default PokemonProvider;