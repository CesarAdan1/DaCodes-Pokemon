import React from 'react'
import './static/styles/styles.scss';

import Routes from './navigation/Routes';
import PokemonProvider from './state/context/PokeContext';
import { LanguageProvider } from './state/context/LanguageContext';


const App = () => {
    return (
        <LanguageProvider>
            <PokemonProvider>
                <Routes />
            </PokemonProvider>
        </LanguageProvider>
    )
}

export default App
