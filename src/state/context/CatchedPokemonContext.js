import React, { createContext, useState, useEffect } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from "../../services/poke_api";
import { pokeLeave } from '../../utils/poke-storage';

export const CatchedPokemonContext = createContext();

const CatchedPokemonProvider = (props) => {

    const [ catchedPokemon, getCatchedPokemon ] = useState([]);
    const [ idPokemon, saveIdPokemon ] = useState(null);

    useEffect(() => {

    }, []);

    return (
        <CatchedPokemonContext.Provider
            value={{
                catchedPokemon,
                saveIdPokemon
            }}
        >
            {props.children}
        </CatchedPokemonContext.Provider>
    )

}

export default CatchedPokemonProvider;