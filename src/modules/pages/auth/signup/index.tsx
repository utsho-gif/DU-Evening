import { Button, Form } from 'react-bootstrap';
import { BsPerson } from 'react-icons/bs';
import PageTitle from '../../../../components/PageTitle';

const SignUp = () => {
  return (
    <>
      <PageTitle title={'Signup'} />
      <div className="my-5">
        <h2 className="text-center forget-password-font">Sign Up</h2>
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
                Sign Up <BsPerson />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
