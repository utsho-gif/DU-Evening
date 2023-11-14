import { Button, Spinner } from 'react-bootstrap';

function Preloader() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Button variant="secondary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}

export default Preloader;
