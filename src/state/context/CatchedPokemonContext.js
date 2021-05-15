import React, { createContext, useState, useEffect } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from "../../services/poke_api";
import { pokeLeave, pokeCatched } from '../../utils/poke-storage';

export const CatchedPokemonContext = createContext();

const CatchedPokemonProvider = (props) => {

    const [catchedPokemon, getCatchedPokemon] = useState([]);
    const [idPokemon, saveIdPokemon] = useState(null);

    const loadCatchedPokemon = () => {
        const pokemon = pokeCatched || []
        getCatchedPokemon(pokemon)
    }

    const getMyPokemon = (name) => {
        const update = [...idPokemon];
        const isCatched = update.indexOf(name);

        if (isCatched >= 0) update.splice(isCatched, 1);
        else update.push(name);

        saveIdPokemon(update);

        pokeCatched(update);
    }

    useEffect(() => {
        loadCatchedPokemon();
    }, []);

    useEffect(() => {
        getMyPokemon
    },[])

    const providerValue = {
        catchedPokemon,
        saveIdPokemon,
        getCatchedPokemon,
        idPokemon
    };

    return (
        <CatchedPokemonContext.Provider
            value={providerValue}
        >
            {props.children}
        </CatchedPokemonContext.Provider>
    )

}

export default CatchedPokemonProvider;