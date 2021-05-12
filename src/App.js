import React from 'react'
import './static/styles/styles.scss';

import Routes from './navigation/Routes';
import PokemonProvider from './state/context/PokeContext';

const App = () => {
    return (
        <PokemonProvider>
            <Routes />
        </PokemonProvider>
    )
}

export default App
