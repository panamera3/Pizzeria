// libraries
import React from "react";
// images
import Exit from "../images/Exit.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="modal-exit"
          src={Exit}
          alt="Кнопка выхода"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
