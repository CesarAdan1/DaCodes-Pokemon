import React, { useContext, useEffect } from 'react';
import { PokeContext } from '../state/context/PokeContext';
import PokemonDescription from '../components/items/PokemonDescription';
import Pagination from '../components/common/Pagination';
import { languages, languagesPrefix, languagesLabel } from '../constants/languages';
import '../static/styles/main-view.scss';
import Translate from '../translations/languages/translate';
import {LanguageSelector} from '../components/selectors/LanguageSelector';
import { LanguageContext } from '../state/context/LanguageContext';

const PokemonMainView = () => {
    const { pokemon, loading, page, total,
        setPage, languageSelected, setLanguageSelected,
        setLanguageSelectedES, language, setLanguage,
        languageSelectedES
    } = useContext(PokeContext);

    const { dictionary } = useContext(LanguageContext);

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    const changeLanguageEs = (e) => {
        e.preventDefault();
        setLanguageSelectedES(Translate.loadLanguage(languageSelectedES.code));

        return true
    }

    const changeLanguage = () => {
        setLanguageSelected(Translate.loadLanguage(languageSelected.code));
        setLanguage(language);

        return true

    }

    const changeLanguageUI = () => {
        setClickText(<Text tid="buttonClicked" />);
      }
    
    return (
        <div className="main-pokemon">
            <div className="main-pokemon__header">
                <div style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                   <LanguageSelector />
                </div>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>

            {loading ?
                (
                    <div className="main-pokemon__message">
                        {Translate.parse("LOADING")}
                    </div>
                )
                : (
                    <div className="main-pokemon__container">
                        {
                            pokemon.map((poke, id, dictionaryUI) => (

                                <PokemonDescription
                                    key={id + 1}
                                    pokemon={poke}
                                    dictionary={dictionaryUI}
                                />
                            ))
                        }
                    </div>

                )
            }
        </div>
    )
}

export default PokemonMainView;