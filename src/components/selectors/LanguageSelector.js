import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../../translations/languages';
import { LanguageContext } from '../../state/context/LanguageContext';

export const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = e => {
    userLanguageChange(e.target.value);
  }

  useEffect(() => {
    handleLanguageChange
}, []);

  return (
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  );
};