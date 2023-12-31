import React from 'react';
import { Modal } from 'react-bootstrap';

interface IFacultyModal {
  facultyShowModal: boolean;
  facultyModalClose: () => void;
}

const FacultyModal: React.FC<IFacultyModal> = ({
  facultyShowModal,
  facultyModalClose,
}) => {
  return (
    <Modal
      size="xl"
      show={facultyShowModal}
      onHide={facultyModalClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header closeButton>
        <div className="modal-body p-0 d-flex align-items-center flex-column">
          <h3 className="m-0">Quiz Details</h3>
        </div>
      </Modal.Header>
      <Modal.Body>'Something'</Modal.Body>
    </Modal>
  );
};

export default FacultyModal;
