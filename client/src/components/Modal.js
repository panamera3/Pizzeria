// libraries
import React from "react";
// images
import Exit from "../images/Exit.svg";
// styles
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, width, stylePosition, height }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal" style={stylePosition}>
          <div className="modal-content" style={{ width: `${width}`, height: `${height}` }}>
            <img
              className="modal-exit"
              src={Exit}
              alt="Кнопка выхода"
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
