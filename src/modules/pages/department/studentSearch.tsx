import { Button, Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';

const StudentSearch = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-75 student-search">
        <Form.Group>
          <Form.Label htmlFor="registrationNumber">
            Registration Number
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration number"
            id="registrationNumber"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Session</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select Session</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center">
          <Button className="w-50 mt-4 search-button" type="submit">
            Search <BiSearchAlt />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StudentSearch;
