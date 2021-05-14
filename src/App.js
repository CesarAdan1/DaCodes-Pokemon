import React from 'react'
import './static/styles/styles.scss';

import Routes from './navigation/Routes';
import PokemonProvider from './state/context/PokeContext';
import CatchedPokemonProvider  from './state/context/CatchedPokemonContext';
import ModalProvider  from './state/context/ModalContext';
import LanguageProvider  from './state/context/LanguageContext';


const App = () => {
    return (
        <LanguageProvider>
            <PokemonProvider>
                <CatchedPokemonProvider>
                    <ModalProvider>
                        <Routes />
                    </ModalProvider>
                </ CatchedPokemonProvider>
            </PokemonProvider>
        </LanguageProvider>
    )
}

export default App
