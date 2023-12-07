import React from "react";
import './cardCart.css';

const Modal = ({ isOpen, onClose, children }) => {
    const handleOverlayClick = (e) => {
        if(e.target === e.currentTarget){
            onClose();
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;