import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../static/styles/header.scss';

const Header = () => {
    let imgUrl = "https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png"
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__catched">
                    <Link to="/" draggable="false">
                        <img src={imgUrl} alt="pokeapi-logo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
