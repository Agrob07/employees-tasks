import React from "react";

import modalStyle from "../../style/modal.module.css";

const Modal = ({ isOpen, onConfirm, onCancel, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <div className={modalStyle.modal}>
        <div className={modalStyle.modalContent}>
          {children}
          <div className={modalStyle.modalButtons}>
            <button
              type="submit"
              className={modalStyle.confirmButton}
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className={modalStyle.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
