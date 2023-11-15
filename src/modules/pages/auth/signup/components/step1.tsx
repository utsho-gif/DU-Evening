import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

interface IFirstStep {
  nextStep: () => void;
}

interface IFirstInfo {
  faculty: string;
  department: string;
  registrationNo: string;
  session: string;
  program: string;
}

const FirstStep: React.FC<IFirstStep> = ({ nextStep }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstInfo, setFirstInfo] = useState<IFirstInfo>({
    faculty: '',
    department: '',
    registrationNo: '',
    session: '',
    program: '',
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    nextStep();
  };

  return (
    <div className="my-5">
      <h2 className="text-center forget-password-font">Sign Up</h2>
      <div className="d-flex align-items-center justify-content-center">
        <Form className="form-style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 col-lg-12" controlId="faculty">
            <Form.Label>Faculty</Form.Label>
            <Form.Select>
              <option>Select Your Faculty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Select>
              <option>Select Your Department</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 col-lg-12" controlId="regno">
            <Form.Label>Registration No.</Form.Label>
            <Form.Control type="text" placeholder="Registration No" />
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="session">
            <Form.Label>Session</Form.Label>
            <Form.Select>
              <option>Select Your Session</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-lg-12" controlId="program">
            <Form.Label>Program</Form.Label>
            <Form.Select>
              <option>Select Your Program</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button type="submit" className="button-style fw-semibold w-100">
              Next <FaRegArrowAltCircleRight />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FirstStep;
