/* eslint-disable react-refresh/only-export-components */
import { FC, memo, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Loading from '../Loading';

interface IDeleteModalProps {
  show: boolean;
  handleClose: () => void;
  onDelete: any;
  isLoading: boolean;
  selected: any;
}

const DeleteModal: FC<IDeleteModalProps> = ({
  handleClose,
  show,
  isLoading,
  onDelete,
  selected,
}) => {
  const handleChange = () => {
    onDelete({
      id: selected,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
        <DeleteForeverIcon
          color="error"
          fontSize="large"
          style={{
            fontSize: '6rem',
          }}
        />
        <Modal.Title
          className="fs-3 fw-bold "
          style={{
            color: 'rgba(0,0,0,.65)',
          }}
        >
          Are You Sure?
        </Modal.Title>
        <div
          style={{
            color: 'gray',
          }}
        >
          Once deleted, you will not be able to recover this data!
        </div>
      </Modal.Body>
      <Modal.Footer
        className="d-flex justify-content-center align-items-center"
        style={{ gap: '5px' }}
      >
        <Button
          className="footer-secondary-btn"
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="button-style"
          onClick={handleChange}
          disabled={isLoading}
        >
          {isLoading ? <Loading text="Loading..." /> : 'Yes'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function areEqual(prevProps: any, nextProps: any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default memo(DeleteModal, areEqual);
