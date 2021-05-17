import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TitleComponent from './TitleComponent';
import PokemonMainView from '../views/PokemonMainView';
import '../static/styles/container.scss';


import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Routes = () => {
    return (
        <Router>
            <Header />
            <div className="route_cont">
                <Switch>
                    <Route exact path="/">
                        <TitleComponent title="Pokemon API Dacodes" />
                        <PokemonMainView />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default Routes;