import React from 'react'
import './static/styles/styles.scss';

import Routes from './navigation/Routes';
import PokemonProvider from './state/context/PokeContext';
import { CatchedPokemonProvider } from './state/context/CatchedPokemonContext';

const App = () => {
    return (
        <PokemonProvider>
        <CatchedPokemonProvider>
            <Routes />
        </ CatchedPokemonProvider>
        </PokemonProvider>
    )
}

export default App
