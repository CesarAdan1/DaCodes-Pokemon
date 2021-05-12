import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TitleComponent from './TitleComponent';
import {
    PokemonView,
    PokemonSavedView,
    PokemonFilterResultsView,
    PokemonMainView
} from '../views';
import '../static/styles/container.scss';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <TitleComponent title="Pokemon API Dacodes" />
                    <PokemonMainView />
                </Route>
                <Route exact path={`pokemon/${props.name}`}>
                    <TitleComponent title={`Pokemon ${props.name}`} />
                    <PokemonView />
                </Route>
                <Route exact path={`/pokemoncatched`}>
                    <TitleComponent title={`Atrapados`} />
                    <PokemonSavedView />
                </Route>
                <Route exact path={`/pokemonfilter${" "}${props.name}`}>
                    <TitleComponent title={`Resultados con pokemon ${props.name}`} />
                    <PokemonFilterResultsView />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;