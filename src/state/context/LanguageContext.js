import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../../translations/languages';

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.es
  });

  export function LanguageProvider(props) {
    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
    const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();

    const provider = {
      userLanguage,
      dictionary: dictionaryList[userLanguage],
      userLanguageChange: selected => {
        const newLanguage = languageOptions[selected] ? selected : 'en'
        setUserLanguage(newLanguage);
        window.localStorage.setItem('rcml-lang', newLanguage);
      },
      clickText, setClickText,
      selectedOption, setSelectedOption
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {props.children}
      </LanguageContext.Provider>
    );
  };
  
  export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
  
    return languageContext.dictionary[tid] || tid;
  };