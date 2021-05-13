import React, { useContext } from 'react';
import { PokeContext } from '../state/context/PokeContext';
import PokemonDescription from '../components/items/PokemonDescription';
import SelectFilter from '../components/selects/SelectFilter';
import Pagination from '../components/common/Pagination';
import '../static/styles/main-view.scss';

const PokemonMainView = (props) => {

    const { pokemon } = useContext(PokeContext);

    console.log(pokemon);

    const { poke, page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    return (
        <div className="main-pokemon">
            <div className="main-pokemon__header">
                <SelectFilter />
            </div>
            {loading ? 
                (
                    <div>Cargando pokemon...</div>
                )
            : (
                <div className="main-pokemon__container">
                    {/* {pokemon.map((poke) => (
                        <PokemonDescription
                            key={poke.name}
                            pokemonName={poke.name}
                            srcPokemon={poke.url}
                        />
                    ))} */}
                    <PokemonDescription 
                        pokemonName="Bulbasaur"
                        
                    />
                    <Pagination 
                        page="1"
                        totalPages="20"
                    />
                </div>
                
            )
             }
        </div>
    )
}

export default PokemonMainView;