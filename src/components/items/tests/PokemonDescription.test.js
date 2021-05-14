import React from 'react';
import ReactDOM from 'react-dom';
import PokemonDescription from '../PokemonDescription';
//import { isTSAnyKeyword } from '@babel/types';

it('renders component', () => {
    const div = document.createElement("div");
    ReactDOM.render(<PokemonDescription />, div)
});
