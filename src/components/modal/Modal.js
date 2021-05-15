import React, { useState, useRef } from 'react'
import '../../static/styles/modal.scss'
import { useClickOutsideListenerRef, useClickOutside } from '../../hooks/useModal';

const Modal = (props) => {
    const [close, setClose] = useState(true);

    const ref = useRef();

    useClickOutside(ref, () => {
        if (close) setClose(false)
    });

    return (
        <>
            {setClose && (
                <div className="poke-card">
                    <div className="poke-card__content">
                        {props.children}
                    </div>
                    <div className="poke-card__btn">
                        <span className="poke-card__close" onClick={() => setClose(false)}>Cerrar</span>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Modal
