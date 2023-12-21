import { Button, Form } from 'react-bootstrap';
import { IoKeyOutline } from 'react-icons/io5';

const ChangePassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-75 student-search">
        <h5 className="p-2 rounded-2 bg-success text-center text-white w-75 m-lg-auto mb-4 department-name">
          Change Password
        </h5>
        <Form.Group>
          <Form.Label htmlFor="currentPassword">
            Current Password <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter current password"
            id="currentPassword"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="newPassword">
            New Password <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            id="newPassword"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="confirmPassword">
            Confirm Password <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirm password"
            id="confirmPassword"
          />
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            className="w-50 mt-4 search-button d-flex align-items-center justify-content-center"
            type="submit"
          >
            Submit&nbsp; <IoKeyOutline />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePassword;
