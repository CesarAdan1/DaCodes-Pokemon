import React, { createContext, useEffect, useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idPokemon, saveIdPokemon] = useState(null);
    const [ information, saveInformationPokemon ] = useState({});

    useEffect(() => {

    }, []);

    return (
        <ModalContext.Provider>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;