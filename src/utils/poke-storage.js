import { POKEMON } from '../constants/constants'

export const pokeCatch = () => { 
    localStorage.getItem(POKEMON);
}

export const pokeCatch = () => { 
    localStorage.setItem(POKEMON);
}

export const pokeLeave = () => {
     localStorage.removeItem(POKEMON);
}
