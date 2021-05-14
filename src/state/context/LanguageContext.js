import React, { createContext, useEffect, useState} from 'react';

export const LanguageContext = createContext();

const LanguageProvider = (props) => {

    const [idLanguage, saveIdLanguage] = useState(null);
    const [ language, saveLanguagePokemon ] = useState({});

    useEffect(() => {

    }, []);

    return (
        <LanguageContext.Provider>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;