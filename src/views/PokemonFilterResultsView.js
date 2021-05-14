import React, { useState } from 'react'
import PokemonDescription from '../components/items/PokemonDescription';

const PokemonFilterResultsView = ({onClick, onChange, name, value}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="search__container">
                <div className="search__container__content" >
                    <div className="search__container__search">
                    <span className="search__container__icon" onClick={onClick}>{"<--"}</span>
                    <input
                        className="search__container__input" 
                        placeholder="Buscar por número, tipo, nombre"
                        type="text"
                        onChange={onChange}
                        maxLength="120"
                        value={value}
                        name={name}
                        onFocus={() => setShow({ show: true })}
                    />
                    </div>
                    {show && (
                        <div className="search__container__list">
                            hey
                        </div>
                    )}
                    
                </div>
            </div>
    )
}

export default PokemonFilterResultsView
