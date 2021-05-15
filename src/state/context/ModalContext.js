import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [details, getDetails] = useState([]);
    const [information, saveInformationPokemon] = useState({});

    useEffect(() => {

    }, []);

    const modalProvider = {
        details,
        getDetails
    }

    return (
        <ModalContext.Provider
            value={modalProvider}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;