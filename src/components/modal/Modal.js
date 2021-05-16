import React from 'react'
import PropTypes from 'prop-types'
import '../../static/styles/modal.scss'

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="poke-card"
      onClick={() => { close(); }}
    >
        <div
          className="poke-card__content"
          onClick={e => { e.stopPropagation() }}
        >
          {children}
        </div>
         <button className="poke-card__btn" onClick={close}>Close</button>
     
    </div>
  ) : null;
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  handleClose: PropTypes.func
}

export default Modal;
