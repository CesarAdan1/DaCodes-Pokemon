import React, { createContext, useState, useEffect } from 'react';

export const CatchedPokemonContext = createContext({
    catchedPokemon: [],
    updateCatchedPokemon: (id) => null
});

export const CatchedPokemonrovide = CatchedPokemonContext.Provider()

export default CatchedPokemonContext;