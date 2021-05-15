import React, { createContext, useEffect, useState} from 'react';

export const LanguageContext = createContext();

const LanguageProvider = (props) => {

    const [idLanguage, savedIdLanguage] = useState(null);
    const [ language, saveLanguagePokemon ] = useState({});

    useEffect(() => {

    }, []);

    const langProv = {
        idLanguage,
        language, 
        savedIdLanguage,
        saveLanguagePokemon
    }

    return (
        <LanguageContext.Provider
            value={langProv}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;