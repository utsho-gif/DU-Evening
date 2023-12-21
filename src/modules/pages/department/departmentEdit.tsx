import { Button, Form } from 'react-bootstrap';
import { GrDocumentUpdate } from 'react-icons/gr';

const DepartmentEdit = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Form className="w-75 student-search">
          <h5 className="p-2 rounded-2 bg-success text-center text-white w-75 m-lg-auto mb-4 department-name">
            Department Name
          </h5>
          <Form.Group>
            <Form.Label htmlFor="departmentName">
              Department Name <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              id="departmentName"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="contactNumber">
              Contact Number <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact number"
              id="contactNumber"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="departmentEmail">
              Department Email <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="departmentEmail"
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              className="w-50 mt-4 search-button d-flex align-items-center justify-content-center"
              type="submit"
            >
              Update&nbsp; <GrDocumentUpdate />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default DepartmentEdit;
