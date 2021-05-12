import React from 'react'
import '../../static/styles/header.scss';

const Header = ({ onChange, onClick }) => {
    let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <header className="header">
            <div className="header__container">
            <div>
        <img src={imgUrl} alt="pokeapi-logo" style={{width: '160px', overflow: 'hidden !important'}} />
      </div>
                <form className="header__form">
                    <input 
                        className="header_input"
                        type="text"
                        autoComplete="off"
                        aria-label="auto"
                        onChange={onChange}
                        placeholder="Buscar por tipo, nombre, numero, ..."
                    />
                    <button 
                     className="header_btn"
                     onClick={onClick}>
                        O
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header
