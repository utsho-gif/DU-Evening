import { Button, Form } from 'react-bootstrap';
import { IoKeyOutline } from 'react-icons/io5';

const LoginPage = () => {
  return (
    <div className="my-5">
      <div className="d-flex align-items-center justify-content-center">
        <Form className="form-style">
          <Form.Group className="mb-3 col-lg-12" controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Select>
              <option>Select Your Department</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="session">
            <Form.Label>Session</Form.Label>
            <Form.Select>
              <option>Select Your Session</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="regno">
            <Form.Label>Registration No</Form.Label>
            <Form.Control type="text" placeholder="Registration No" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-end">
            <Button variant="primary" type="submit" className="fw-semibold">
              Login <IoKeyOutline />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
