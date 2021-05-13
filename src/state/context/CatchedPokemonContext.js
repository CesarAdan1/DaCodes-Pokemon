import React, { createContext, useState, useEffect } from 'react';

const CatchedPokemonContext = createContext({
    catchedPokemon: [],
    updateCatchedPokemon: (id) => null
});

export const CatchedPokemonProvider = CatchedPokemonContext.Provider;

export default CatchedPokemonContext;