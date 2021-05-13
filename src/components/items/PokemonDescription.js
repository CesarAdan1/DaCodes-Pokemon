import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../static/styles/pokemon.scss'
import CatchedPokemonContext from '../../state/context/CatchedPokemonContext';

const PokemonDescription = (props) => {
    const { pokemon } = props;
 

    const redHeart = "❤️";
    const blackHeart = "🖤";
    //const heart = catchedPokemon.includes(pokemon.pokemonName) ? redHeart : blackHeart;

     const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon);
  };

    return (
        <div className="pokemon-item">
            <figure className="pokemon-item__fg">
                <Link to={`/pokemon/${props.pokemonName}`} title={props.pokemonName}>
                    <img className="pokemon-item__img" width="90" height="90" 
                        src={props.srcPokemon} alt={props.pokemonName} 
                    />
                </Link>
            </figure>
            <div className="pokemon-item__cont--info">
                <div className="pokemon-item__inf">
                    <h3 className="pokemon-item__name">{props.pokemonName}</h3>
                    <div className="pokemon-item__number">#{" "}{props.id}</div>
                </div>
                <div className="pokemon-item__card-bottom">
  
            <button className="pokemon-item__btn-more">Ver más</button>

          <button onClick={clickHeart} className="pokemon-item__heart-btn">
            <div className="pokemon-item__favorite">{props.heart}</div>
          </button>
        </div>
            </div>
        </div>
    )
}

export const PokemonComplete = () => {

}


export default PokemonDescription;

