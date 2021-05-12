import React from 'react'
import '../../static/styles/header.scss';

const Header = ({ onChange, onClick }) => {
    return (
        <header className="header">
            <div className="header__container">
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
