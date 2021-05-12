import React from 'react'
import { Link } from 'react-router-dom'

const PokemonDescription = (pokemonName, srcPokemon) => {
    return (
        <div>
            <figure>
                <Link to={`/pokemon/${pokemonName}`}>
                    <img width="90" height="90" src={srcPokemon} alt={pokemonName} />
                </Link>
            </figure>
        </div>
    )
}

export default PokemonDescription;
