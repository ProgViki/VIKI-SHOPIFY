import React from 'react';
import  Style from './Modal.module.css'

const Modal = ({children}) => {
  return (
    <div className={Style.container}>
      {children}
    </div>
  );
}

export default Modal;