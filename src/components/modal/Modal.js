import React from 'react'
import '../../static/styles/modal.scss'

const Modal = ({onClick}) => {
    return (
        <div className="poke-card">
            
                <img className="poke-card__bg" src="" alt="background"/>
                <div
                className="poke-card__content"
                >
                    <img 
                        className="poke-card__image"
                    alt={pokeName} src={srcPokeImg}/>
                    <h1 className="poke-card__h1">{pokeName}
                        <span>{strength}</span>
                    </h1>
                    
                    <p className="poke-card__p">{attacks}</p>
                </div>
                <div className="poke-card__footer">
                    <div className="poke-card__sec1">
                        <h3></h3>
                    </div>
                    <div className="poke-card__sec2">
                        <h3></h3>
                    </div>
                    <div className="poke-card__sec3">
                        <h3></h3>
                    </div>
                </div>
        </div>
    )
}

export default Modal
