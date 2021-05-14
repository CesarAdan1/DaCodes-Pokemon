import React, { createContext, useState, useEffect } from 'react';

export const CatchedPokemonContext = createContext();

const CatchedPokemonProvider = (props) => {

    return (
        <CatchedPokemonContext.Provider>
            {props.children}
        </CatchedPokemonContext.Provider>
    )

}

export default CatchedPokemonProvider;