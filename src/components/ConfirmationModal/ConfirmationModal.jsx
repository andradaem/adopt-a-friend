import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

export default function ConfirmationModal({
  isVisible,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) {
  const handleConfirm = (event) => {
    event.stopPropagation();
    onConfirm();
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    onCancel();
  };

  return (
    <Modal show={isVisible} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          {cancelText}
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  cardId: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

ConfirmationModal.defaultProps = {
  isVisible: false,
  confirmText: "Confirm",
  cancelText: "Cancel",
};
