import React from 'react'
import PokemonDescription from '../components/items/PokemonDescription';

const PokemonFilterResultsView = ({onClick, onChange, name, value}) => {
    return (
        <div className="search__container">
                <div>
                    <span onClick={onClick}>{"<--"}</span>
                    <input 
                        placeholder="Buscar por número, tipo, nombre"
                        type="text"
                        onChange={onChange}
                        maxLength="120"
                        value={value}
                        name={name}
                    />
                    <div>Search Lists</div>
                </div>
            </div>
    )
}

export default PokemonFilterResultsView
