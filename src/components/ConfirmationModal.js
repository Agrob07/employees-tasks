import React from "react";
import "../style/modal.css";

const ConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button className="confirm-button" onClick={onConfirm}>
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

export default ConfirmationModal;
