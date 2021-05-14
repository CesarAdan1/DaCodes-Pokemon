import React from 'react';
import ReactDOM from 'react-dom';
import PokemonMainView from '../PokemonMainView';
//import { isTSAnyKeyword } from '@babel/types';

it('renders component', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonMainView />, div)
});