import React, { useContext } from 'react';
import { PokeContext } from '../state/context/PokeContext';
import PokemonDescription from '../components/items/PokemonDescription';
import SelectFilter from '../components/selects/SelectFilter';
import Pagination from '../components/common/Pagination';
import '../static/styles/main-view.scss';

import Modal from '../components/modal/Modal'


const PokemonMainView = (props) => {
    console.log("main" + props)
    const { pokemon, loading, page, total, setPage } = useContext(PokeContext);
    console.log(pokemon + "you")
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
                <SelectFilter 
                    name=""
                    value=""
                />
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>

            {loading ?
                (
                    <div className="main-pokemon__message">Cargando pokemon...</div>
                )
                : (
                    <div className="main-pokemon__container">
                        {
                            pokemon.map((poke, id) => (

                                <PokemonDescription
                                    key={id + 1}
                                    pokemon={poke}
                                />
                            ))
                        }
                        {console.log(pokemon.map((poke) => poke.name))}
                    </div>

                )
            }
        </div>
    )
}

export default PokemonMainView;