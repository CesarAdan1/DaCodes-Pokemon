import React, { createContext, useState, useEffect } from 'react';
import { searchPokemon, getPokemonLanguage, getPokemon, getPokemonData } from '../../services/poke_api';
import { languages } from '../../constants/languages';

export const PokeContext = createContext();

const PokemonProvider = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [language, setLanguage] = useState(null)
    const [languageSelected, setLanguageSelected] = useState(languages.EN)
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
            let dataPoke = data.results.map(async (pokemon) => {
                let pokemonD = await getPokemonData(pokemon.url)

                return pokemonD;
            })
            let pokeData = await Promise.all(
                dataPoke
            )

            setPokemon(pokeData);
            setLoading(false);
            setTotal(Math.ceil(data.count / 5));
            setNotFound(false);
        } catch (err) {
            console.log(err)
        }
    };

    const getLanguage = (languageCode, resources) => {

        try {

            if (typeof languageCode !== "string")
                throw new Error(".extractLanguage() expected a param of type string call languageCode, but received " + typeof languageCode.toUpperCase())

            if (!languages.hasOwnProperty(languageCode.toUpperCase()))
                throw new Error(".extractLanguage() expected a languageCode valid, but received " + languageCode.toUpperCase())

            if (!Array.isArray(resources))
                throw new Error(".extractLanguage() expected a param resources of type Array, but received " + typeof resources)

            for (let resource of resources) {
                if (resource.hasOwnProperty("language") && resource.language.hasOwnProperty("name") && resource.language.name.toUpperCase() === languageCode.toUpperCase()) {
                    return resource;
                }
            }

            return null;

        } catch (error) {

            console.log(error);

            return null;

        }

    }

    useEffect(() => {
        getLanguage
    }, []);

    useEffect(() => {
        if (!search) getAllPokemon();
    }, [page]);
    //show pokemon by 5
    useEffect(() => {
        getAllPokemon
    }, []);

    useEffect(() => {
        setNotFound(notFound)
    }, []);

    const providerValuePoke = {
        pokemon,
        getSearchPokemon,
        savedSearch,
        loading,
        page,
        total,
        setPage,
        notFound,
        languageSelected,
        language,
        setLanguage,
        setLanguageSelected,
    }

    return (
        <PokeContext.Provider
            value={providerValuePoke}
        >
            {props.children}
        </PokeContext.Provider>
    )
}

export default PokemonProvider;