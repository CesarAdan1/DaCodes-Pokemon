import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../static/styles/pokemon.scss'
import { CatchedPokemonContext } from '../../state/context/CatchedPokemonContext';
import Modal from '../modal/Modal';
import { LanguageContext } from '../../state/context/LanguageContext';
import { convertionWeight, convertionHeight } from '../../constants/convertions';
import Translate from '../../translations/languages/translate.js';

const PokemonDescription = (props) => {

    const { pokemon, onChangeLanguage = () => {} } = props;
    const { catchedPokemon, savedIdPokemon, languageChanged, setLanguageChange } = useContext(CatchedPokemonContext);
    const [modalShown, toggleModal] = useState(false);

    const PokeballRed = <img
        alt="Pokeball"
        width="15px"
        heigh="15px"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEyNi4zMzQgMTI2LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI2LjMzNCAxMjYuMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojRkYxQTFBOyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcj0iNjEuNjY3Ii8+DQoJPC9nPg0KCTxnPg0KCQk8ZWxsaXBzZSBzdHlsZT0iZmlsbDojRDYwOTA5OyIgY3g9IjYzLjE2NyIgY3k9IjYzLjE2NiIgcng9IjYxLjY2NyIgcnk9IjQ3LjIzMiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xLjUsNjMuMTY2YzAsMzQuMDYxLDI3LjYwOSw2MS42NjgsNjEuNjY3LDYxLjY2OHM2MS42NjctMjcuNjA3LDYxLjY2Ny02MS42NjhIMS41eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0Q4RTVFQTsiIGQ9Ik02My4xNjcsMTEwLjM5OGMzNC4wNTgsMCw2MS42NjctMjEuMTQ4LDYxLjY2Ny00Ny4yMzJIMS41DQoJCQlDMS41LDg5LjI1LDI5LjEwOSwxMTAuMzk4LDYzLjE2NywxMTAuMzk4eiIvPg0KCTwvZz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2NywwQzI4LjMzNiwwLDAsMjguMzM2LDAsNjMuMTY2YzAsMzQuODMxLDI4LjMzNiw2My4xNjgsNjMuMTY3LDYzLjE2OA0KCQlzNjMuMTY3LTI4LjMzNyw2My4xNjctNjMuMTY4QzEyNi4zMzQsMjguMzM2LDk3Ljk5OCwwLDYzLjE2NywweiBNNjMuMTY3LDNjMzIuNjczLDAsNTkuMzI4LDI2LjE4Myw2MC4xMjksNTguNjY2SDMuMDM4DQoJCUMzLjgzOSwyOS4xODMsMzAuNDk0LDMsNjMuMTY3LDN6IE02My4xNjcsMTIzLjMzNGMtMzIuNjczLDAtNTkuMzI4LTI2LjE4NC02MC4xMjktNTguNjY4aDEyMC4yNTgNCgkJQzEyMi40OTUsOTcuMTUsOTUuODQsMTIzLjMzNCw2My4xNjcsMTIzLjMzNHoiLz4NCgk8Zz4NCgkJPGNpcmNsZSBzdHlsZT0iZmlsbDojQTdCQkMxOyIgY3g9IjYzLjE2NyIgY3k9IjY4Ljg2OCIgcj0iMTYuNzY0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBjeD0iNjMuMTY3IiBjeT0iNjMuMTY3IiByPSIxNi43NjQiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNEOEU1RUE7IiBkPSJNNTEuMzEzLDc1LjAyMWMtNi41NDctNi41NDctNi41NDYtMTcuMTYsMC0yMy43MDljNi41NDctNi41NDYsMTcuMTYxLTYuNTQ2LDIzLjcwNywwIi8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzNjNBOyIgZD0iTTYzLjE2Nyw4MS40MzJjLTQuODc4LDAtOS40NjUtMS45LTEyLjkxNS01LjM1Yy03LjEyLTcuMTItNy4xMi0xOC43MDcsMC0yNS44Mw0KCQkJYzcuMTIyLTcuMTIsMTguNzA4LTcuMTIsMjUuODI5LDBsMCwwYzMuNDUsMy40NTEsNS4zNTEsOC4wMzgsNS4zNTEsMTIuOTE2YzAsNC44NzgtMS45LDkuNDY1LTUuMzUxLDEyLjkxNQ0KCQkJQzcyLjYzMiw3OS41MzIsNjguMDQ2LDgxLjQzMiw2My4xNjcsODEuNDMyeiBNNjMuMTY3LDQ3LjkxYy0zLjkwOSwwLTcuODE3LDEuNDg3LTEwLjc5Myw0LjQ2M2MtNS45NSw1Ljk1My01Ljk1LDE1LjYzNywwLDIxLjU4OA0KCQkJYzIuODgzLDIuODgzLDYuNzE2LDQuNDcxLDEwLjc5Myw0LjQ3MWM0LjA3NywwLDcuOTEtMS41ODgsMTAuNzkyLTQuNDcxYzIuODgzLTIuODgzLDQuNDcyLTYuNzE2LDQuNDcyLTEwLjc5Mw0KCQkJYzAtNC4wNzctMS41ODgtNy45MS00LjQ3Mi0xMC43OTRDNzAuOTg1LDQ5LjM5OCw2Ny4wNzYsNDcuOTEsNjMuMTY3LDQ3LjkxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02OC44NzEsNjguODdjLTMuMTQ5LDMuMTQ2LTguMjU3LDMuMTQ2LTExLjQwNCwwYy0zLjE0OS0zLjE1LTMuMTQ4LTguMjU1LDAtMTEuNDAzDQoJCQljMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMEM3Mi4wMTksNjAuNjE1LDcyLjAxOSw2NS43Miw2OC44NzEsNjguODd6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRDhFNUVBOyIgZD0iTTU3LjQ2Nyw1Ny40NjdjMy4xNDgtMy4xNSw4LjI1NS0zLjE0OCwxMS40MDMsMGMzLjE0OCwzLjE0OCwzLjE0OCw4LjI1MywwLjAwMSwxMS40MDMiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzM2M0E7IiBkPSJNNjMuMTY4LDcyLjcyNWMtMi40NSwwLTQuODk4LTAuOTMxLTYuNzYyLTIuNzk0Yy0zLjcyOS0zLjczLTMuNzI5LTkuNzk3LDAtMTMuNTI1DQoJCQljMS44MDUtMS44MDcsNC4yMDctMi44MDIsNi43NjEtMi44MDJjMCwwLDAsMCwwLDBjMi41NTUsMCw0Ljk1NywwLjk5Niw2Ljc2MywyLjgwMmMzLjcyOCwzLjcyNywzLjcyOCw5Ljc5NCwwLjAwMSwxMy41MjQNCgkJCWMwLDAsMCwwLjAwMS0wLjAwMSwwLjAwMUM2OC4wNjYsNzEuNzk0LDY1LjYxNyw3Mi43MjUsNjMuMTY4LDcyLjcyNXogTTYzLjE2Nyw1Ni42MDRjLTEuNzUzLDAtMy40MDEsMC42ODMtNC42NCwxLjkyMw0KCQkJYy0yLjU1OSwyLjU1OS0yLjU1OSw2LjcyMywwLDkuMjgyYzIuNTU4LDIuNTU3LDYuNzIzLDIuNTU3LDkuMjgzLDBjMi41NTgtMi41NiwyLjU1Ny02LjcyNC0wLjAwMS05LjI4Mg0KCQkJQzY2LjU3LDU3LjI4OCw2NC45MjEsNTYuNjA1LDYzLjE2Nyw1Ni42MDRMNjMuMTY3LDU2LjYwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
    />;

    const pokeballGray = <img
        alt="Pokeball"
        width="15px"
        heigh="15px"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/PokemonSymbol.svg"
    />;

    //const catchem = catchedPokemon.include(pokemon.name) ? PokeballRed : pokeballGray;

    const catchPokemon = (e) => {
        e.preventDefault();
        savedIdPokemon(pokemon.name);
    };

    return (
        <>
            <li data-testid="item-container" className="pokemon-item">
                <figure className="pokemon-item__fg">
                    <Link to={`/pokemon/${pokemon.name}`} title={pokemon.name}>
                        <img className="pokemon-item__img"
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </Link>
                    {/* <button onClick={catchPokemon} className="pokemon-item__catched-btn">
                        <div className="pokemon-item__favorite">{pokeballGray}</div>
                    </button> */}
                </figure>

                <div className="pokemon-item__poke--info">
                    <p className="pokemon-item__number">
                        {" "}
                        <span className="pokemon-item__number--prefix">N.º</span>
                        {" "}{pokemon.id}
                    </p>
                    <h5 className="pokemon-item__name">{pokemon.name}</h5>

                    <div className="pokemon-item__abilities">
                        {pokemon.types.map((type, id) => (
                            <span
                                key={id}
                                className={"pokemon-item__type"}
                            >{type.type.name}</span>
                        ))}
                    </div>
                </div>
                <div className="pokemon-item__card-bottom">
                    <button
                        onClick={() => onChangeLanguage(pokemon)}
                        className="pokemon-item__btn-more"
                        onClick={() => { toggleModal(!modalShown) }}
                    >Ver más</button>
                </div>

            </li>

            <Modal
                shown={modalShown}
                close={() => { toggleModal(false) }}
            >
                <div className="pokemon__details_container">
                    <h2 
                    onClick={() => { }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        textTransform: 'capitalize'}}>
                    {pokemon.name}</h2>
                <div className="pokemon__details_container--measures">
                    <h2 className="pokemon__details_container--title">Measures</h2>
                    <span className="pokemon__details_container-H">{ Translate.parse("HEIGHT")}: </span> 
                        {" "}
                    <span className="pokemon__details_container--Hnumber">{convertionHeight(props.pokemon.height)}{" "}m</span>
                    <span className="pokemon__details_container-W">{ Translate.parse("WEIGHT")}: {" "}</span> 
                    <span className="pokemon__details_container-Wnum">{convertionWeight(props.pokemon.weight)}{" "}kg</span>
                </div>
                <div>
                    <h2 className="pokemon__details_container--title">Abilities</h2>
                    <div className="pokemon__details_container--sect">
                        {props.pokemon.abilities.map((ability, i) => {
                            return (
                                <div key={i} id={i} className="pokemon__details_container--move-type">
                                    {ability.ability.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="pokemon__details_container--title">Movements</h2>
                    <div className="pokemon__details_container--sect">
                        {props.pokemon.moves.map((move, i) => {
                            return (
                                <div key={i} id={i} className="pokemon__details_container--move-type">
                                    {move.move.name}
                                </div>
                            );
                        })}
                    </div>
                </div>
                </div>
        </Modal>
        </>

    )
}

export default PokemonDescription;

// {
//     "name": "daCodes",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "start": "webpack-dev-server --watch --config webpack.config.dev.js",
//       "build": "webpack --config webpack.config.prod.js",
//       "dev": "webpack-dev-server --watch --config webpack.config.dev.js",
//       "prebuild": "npm run clean",
//       "deploy": "aws s3 cp ./build s3://${S3BUCKET}/ --recursive",
//       "test": "jest --verbose",
//       "clean": "rm -rf build/*",
//       "test:watch": "jest --watch",
//       "test:coverage": "jest --coverage --colors",
//       "eject": "react-scripts eject",
//       "lint": "eslint --fix src/**/*.js",
//       "format": "prettier src/**/*.js --write  --config"
//     },
//     "homepage": "dacode-poke-api",
//     "author": "César Adán Juárez Calderón",
//     "license": "ISC",
//     "dependencies": {
//       "@babel/types": "^7.14.2",
//       "@sentry/browser": "^5.21.1",
//       "@testing-library/react": "^11.2.6",
//       "axios": "^0.21.1",
//       "babel-preset-jest": "^26.6.2",
//       "bloomer": "^0.6.5",
//       "date-fns": "^2.21.2",
//       "i18next": "^20.2.2",
//       "identity-obj-proxy": "^3.0.0",
//       "jest-dom": "^4.0.0",
//       "pretty": "^2.0.0",
//       "react": "^16.13.1",
//       "react-dom": "^16.13.1",
//       "react-helmet": "^5.2.1",
//       "react-router-dom": "^5.2.0",
//       "react-svg-loader": "^3.0.3",
//       "react-test-render": "^1.1.2",
//       "source-map-loader": "^0.2.4"
//     },
//     "devDependencies": {
//       "@babel/cli": "^7.10.5",
//       "@babel/core": "^7.11.1",
//       "@babel/plugin-proposal-class-properties": "^7.13.0",
//       "@babel/plugin-proposal-object-rest-spread": "^7.11.0",
//       "@babel/plugin-syntax-dynamic-import": "^7.8.3",
//       "@babel/plugin-transform-react-constant-elements": "^7.13.13",
//       "@babel/plugin-transform-react-inline-elements": "^7.12.13",
//       "@babel/plugin-transform-runtime": "^7.13.15",
//       "@babel/preset-env": "^7.14.2",
//       "@babel/preset-react": "^7.13.13",
//       "@babel/runtime": "^7.13.17",
//       "@svgr/webpack": "^5.5.0",
//       "babel-jest": "^24.9.0",
//       "babel-loader": "^8.1.0",
//       "babel-plugin-inline-import": "^3.0.0",
//       "babel-plugin-inline-react-svg": "^1.1.1",
//       "babel-plugin-module-resolver": "^3.2.0",
//       "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
//       "connected-react-router": "^6.8.0",
//       "css-loader": "^3.6.0",
//       "css-minimizer-webpack-plugin": "^2.0.0",
//       "dotenv": "^8.2.0",
//       "dotenv-webpack": "^1.8.0",
//       "enzyme": "^3.11.0",
//       "enzyme-adapter-react-16": "^1.15.3",
//       "enzyme-to-json": "^3.5.0",
//       "eslint-config-prettier": "^7.2.0",
//       "eslint-plugin-cypress": "^2.11.1",
//       "eslint-plugin-prettier": "^3.3.1",
//       "eslint-plugin-react": "^7.22.0",
//       "eslint-plugin-react-hooks": "^4.2.0",
//       "extract-loader": "^3.2.0",
//       "favicons-webpack-plugin": "^4.2.0",
//       "html-loader": "^1.2.1",
//       "html-webpack-plugin": "^4.3.0",
//       "jest": "^24.9.0",
//       "jest-enzyme": "^7.1.2",
//       "jest-transform-graphql": "^2.1.0",
//       "json": "^9.0.6",
//       "lint-staged": "^10.5.3",
//       "mini-css-extract-plugin": "^0.8.2",
//       "node-sass": "^4.14.1",
//       "optimize-css-assets-webpack-plugin": "^5.0.4",
//       "parcel-bundler": "^1.12.4",
//       "postcss": "^8.0.6",
//       "postcss-cli": "^8.3.1",
//       "postcss-loader": "^4.0.2",
//       "prettier": "^2.1.2",
//       "prop-types": "^15.7.2",
//       "react-hot-loader": "^4.13.0",
//       "react-redux": "^7.2.1",
//       "react-scripts": "^3.4.3",
//       "react-test-renderer": "^16.14.0",
//       "resolve-url-loader": "^3.1.2",
//       "sass-loader": "^10.1.1",
//       "terser-webpack-plugin": "^4.2.3",
//       "test-data-bot": "^0.8.0",
//       "url-loader": "^2.3.0",
//       "webpack": "^4.44.1",
//       "webpack-cli": "^3.3.12",
//       "webpack-dev": "^1.1.1",
//       "webpack-dev-server": "^3.11.0",
//       "webpack-merge": "^4.2.2",
//       "workbox-webpack-plugin": "^6.1.5",
//       "worker-loader": "^3.0.8"
//     },
//     "lint-staged": {
//       "*.+(js|jsx)": [
//         "eslint --fix",
//         "git add"
//       ],
//       "*.+(js|jsx|json|md|css)": [
//         "prettier --write",
//         "git add"
//       ],
//       "src/**/*.scss": [
//         "sass-lint -vq"
//       ]
//     },
//     "jest": {
//       "verbose": true,
//       "unmockedModulePathPatterns": [
//         "/node_modules/react",
//         "/node_modules/react-dom",
//         "/node_modules/react-addons-test-utils",
//         "/node_modules/fbjs"
//       ],
//       "transform": {
//         "^.+\\.js$": "babel-jest"
//       },
//       "transformIgnorePatterns": [
//         "node_modules/(?!lodash-es/.*)",
//         "/build"
//       ],
//       "collectCoverageFrom": [
//         "src/**/*.{js,jsx,mjs}"
//       ],
//       "moduleFileExtensions": [
//         "js",
//         "json",
//         "jsx"
//       ],
//       "testEnvironment": "jsdom",
//       "moduleNameMapper": {
//         "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//         "\\.(css|less|scss|sass)$": "identity-obj-proxy"
//       }
//     }
//   }
  