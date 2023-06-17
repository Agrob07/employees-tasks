import React from "react";
import "../../style/modal.css";

const Modal = ({ isOpen, onConfirm, onCancel, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          {children}
          <div className="modal-buttons">
            <button
              type="submit"
              className="confirm-button"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
