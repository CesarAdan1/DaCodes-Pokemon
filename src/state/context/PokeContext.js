import React, { createContext, useState, useEffect } from 'react';
import { searchPokemon, getPokemon, getPokemonData } from '../../services/poke_api';

export const PokeContext = createContext();

const PokemonProvider = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [searchPokemon, getSearchPokemon] = useState({
        name: '',
        number: '',
        type: []
    });

    const [notFound, setNotFound] = useState(false);
    const [search, savedSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    const { name, number, type } = searchPokemon;

    const getAllPokemon = async () => {
        try {
            setLoading(true);
            const data = await getPokemon(5, 5 * page);
            console.log(data.data.results.map((res) => (res.url)) + "you")
            const promises = data.data.results.map(async (poke) => {
                
                return await getPokemonData(poke.url);
            });
            const results = await Promise.all(promises);
            //console.log(results)
            setPokemon(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 5));
            setNotFound(false);
        } catch (err) {
            console.log(err)
         }
    };

    //search
    useEffect(() => {
        if (!search) getAllPokemon();
    }, [page]);

    //show pokemon by 5
    useEffect(() => {
        getAllPokemon
    }, [pokemon]);

    return (
        <PokeContext.Provider
            value={{
                pokemon,
                getSearchPokemon,
                savedSearch,
                loading,
                page,
                total,
                setPage
            }}
        >
            {props.children}
        </PokeContext.Provider>
    )
}

export default PokemonProvider;