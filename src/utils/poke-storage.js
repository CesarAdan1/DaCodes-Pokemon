import { POKEMON } from '../constants/constants'

export const pokeCatch = () => { 
    window.localStorage.getItem(POKEMON);
}

export const pokeCatched = () => { 
    window.localStorage.setItem(POKEMON);
}

export const pokeLeave = () => {
     window.localStorage.removeItem(POKEMON);
}
