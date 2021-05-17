import React, { useContext, useEffect } from 'react';
import { PokeContext } from '../state/context/PokeContext';
import PokemonDescription from '../components/items/PokemonDescription';
import SelectFilter from '../components/selects/SelectFilter';
import Pagination from '../components/common/Pagination';
import { languages } from '../constants/languages';
import '../static/styles/main-view.scss';
import Translate from '../translations/languages/translate';


const PokemonMainView = () => {
    const { pokemon, loading, page, total,
        setPage, languageSelected, setLanguageSelected
    } = useContext(PokeContext);

    console.log(languageSelected)
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    };

    const changeLanguage = () => {

        const makeTranslation = setLanguageSelected(Translate.loadLanguage(languageSelected.code));
        console.log(languageSelected)
        return makeTranslation

    }
    
    return (
        <div className="main-pokemon">
            <div className="main-pokemon__header">
                <div style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
                    <button
                        style={{
                            width: '30px',
                            height: '20px',
                            borderRadius: '5px',
                            margin: '0 6px',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}
                        onClick={() => changeLanguage(languageSelected.ES)}
                    >ES</button>
                    <span>{" "} | {" "}</span>
                    <button
                        style={{
                            width: '30px',
                            height: '20px',
                            borderRadius: '5px',
                            margin: '0 6px',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}
                        onClick={() => changeLanguage(languageSelected.EN)}
                    >EN</button>
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
                            pokemon.map((poke, id) => (

                                <PokemonDescription
                                    key={id + 1}
                                    pokemon={poke}
                                    language={languageSelected}
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