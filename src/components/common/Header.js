import React from 'react'
import '../../static/styles/header.scss';

const Header = ({ onChange, onClick }) => {
    let imgUrl = "https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"

    return (
        <header className="header">
            <div className="header__container">
            <div>
        <img src={imgUrl} alt="pokeapi-logo" />
      </div>
                <form className="header__form">
                    <input 
                        className="header__input"
                        type="text"
                        autoComplete="off"
                        aria-label="auto"
                        maxLegngth="130"
                        onChange={onChange}
                        placeholder="Buscar por tipo, nombre, numero, ..."
                    />
                    <button 
                     className="header__btn"
                     onClick={onClick}>
                        o
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header
