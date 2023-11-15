import { Button, Form } from 'react-bootstrap';
import PageTitle from '../../../../components/PageTitle';

interface IForgetPassword {
  result: boolean;
}

const ForgetPassword: React.FC<IForgetPassword> = ({ result }) => {
  return (
    <>
      <PageTitle title={result ? 'Result' : 'Forget Password'} />
      <div className="my-4 forget-password-box">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="forget-password-font">
              {result ? 'Result' : 'Forgot Password'}
            </h1>
          </div>
        </div>
        <div className="row">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Registration No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your registration number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Select aria-label="department">
                <option>Select your department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="session">
              <Form.Label>Session</Form.Label>
              <Form.Select aria-label="session">
                <option>Select your session</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            {result && (
              <Form.Group className="mb-3" controlId="session">
                <Form.Label>Exam Name</Form.Label>
                <Form.Select aria-label="session">
                  <option>Select your exam</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
