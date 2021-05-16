import React from 'react';
import '../../static/styles/select.scss';

const lang = {
    es: 'es',
    en: 'en',
    ja: 'ja',
  }

  const languageId = {
    es: 'Español',
    en: 'English',
    ja: 'Japones',
  }

  
const SelectFilter = (props) => {

    const { name, value } = props;

    return (
        <div>
            <select
                className="select-filter"
                name={name}
            >
                <option>Hey</option>
                {Object.keys(lang).map((language) => {
                    <option 
                        key={language}
                        value={languageId[language]} 
                        onClick={() => onChangeLanguage(language)} 
                        className="selected-filter__option">
                    </option>
                })}
            </select>
        </div>
    )
}

export default SelectFilter
