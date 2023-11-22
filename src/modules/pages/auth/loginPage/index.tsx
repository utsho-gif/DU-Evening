import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IoKeyOutline } from 'react-icons/io5';
import * as yup from 'yup';

import PageTitle from '../../../../components/PageTitle';

const LoginPage = () => {
  const LoginSchema = yup.object().shape({
    faculty: yup.string().required('Faculty is required'),
    department: yup.string().required('Department is required'),
    session: yup.string().required('Session is required'),
    regno: yup.string().required('Registration number is required'),
    password: yup.string().required('Password is required'),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <>
      <PageTitle title="Login" />
      <div className="my-5">
        <h2 className="text-center forget-password-font">Login</h2>
        <div className="d-flex align-items-center justify-content-center">
          <Form className="form-style" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 col-lg-12" controlId="faculty">
              <Form.Label>
                Faculty <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select {...register('faculty')}>
                <option value="">Select Your Faculty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Label>
                {errors.faculty && (
                  <p className="text-danger">{errors.faculty.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="department">
              <Form.Label>
                Department <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select {...register('department')}>
                <option value="">Select Your Department</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Label>
                {errors.department && (
                  <p className="text-danger">{errors.department.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="session">
              <Form.Label>
                Session <span className="text-danger">*</span>
              </Form.Label>
              <Form.Select {...register('session')}>
                <option value="">Select Your Session</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Label>
                {errors.session && (
                  <p className="text-danger">{errors.session.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="regno">
              <Form.Label>
                Registration No. <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Registration No"
                {...register('regno')}
              />
              <Form.Label>
                {errors.regno && (
                  <p className="text-danger">{errors.regno.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="password">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...register('password')}
              />
              <Form.Label>
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <div className="d-flex align-items-center justify-content-end">
              <Button type="submit" className="button-style fw-semibold">
                Login <IoKeyOutline />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
