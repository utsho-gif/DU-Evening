import { Button, Form } from 'react-bootstrap';
import { IoIosPersonAdd } from 'react-icons/io';

const Teachers = () => {
  return (
    <div>
      <h3 className="text-center mb-3">Department Name</h3>
      <div className="d-flex align-items-center justify-content-center">
        <Form className="w-75 student-search">
          <h5 className="p-2 rounded-2 bg-success text-center text-white w-75 m-lg-auto mb-4">
            Add Teacher
          </h5>
          <Form.Group>
            <Form.Label htmlFor="teacherName">
              Teacher Name <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter teacher name"
              id="teacherName"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="designation">
              Designation <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter designation"
              id="designation"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="phoneNumber">
              Phone Number <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              id="phoneNumber"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="email">
              Email <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email" />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="department">
              Department <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              id="department"
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              className="w-50 mt-4 search-button d-flex align-items-center justify-content-center"
              type="submit"
            >
              Add&nbsp; <IoIosPersonAdd />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Teachers;
