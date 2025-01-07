import React from "react";
import "./Modal.scss"; // Make sure to style your modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times; {/* This renders the 'X' symbol */}
        </button>
        <h2></h2>
        <p>Your eyes need a rest. Take a quick break</p>
      </div>
    </div>
  );
};

export default Modal;
