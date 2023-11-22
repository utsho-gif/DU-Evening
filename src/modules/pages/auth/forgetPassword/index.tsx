import { Button, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import PageTitle from '../../../../components/PageTitle';

interface IForgetPassword {
  result: boolean;
}

const ForgetPassword: React.FC<IForgetPassword> = ({ result }) => {
  const ForgetPasswordSchema = yup.object().shape({
    regno: yup.string().required('Registration number is required'),
    department: yup.string().required('Department is required'),
    session: yup.string().required('Session is required'),
    exam: yup.string().required('Exam name is required'),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(ForgetPasswordSchema) });

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="regno">
              <Form.Label>Registration No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your registration number"
                {...register('regno')}
              />
              <Form.Label>
                {errors.regno && (
                  <p className="text-danger">{errors.regno.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Select aria-label="department" {...register('department')}>
                <option value="">Select your department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label>
                {errors.department && (
                  <p className="text-danger">{errors.department.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="session">
              <Form.Label>Session</Form.Label>
              <Form.Select aria-label="session" {...register('session')}>
                <option value="">Select your session</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label>
                {errors.session && (
                  <p className="text-danger">{errors.session.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            {result && (
              <Form.Group className="mb-3" controlId="exam">
                <Form.Label>Exam Name</Form.Label>
                <Form.Select aria-label="exam" {...register('exam')}>
                  <option value="">Select your exam</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label>
                  {errors.exam && (
                    <p className="text-danger">{errors.exam.message}</p>
                  )}
                </Form.Label>
              </Form.Group>
            )}
            <Button type="submit" className="button-style w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
