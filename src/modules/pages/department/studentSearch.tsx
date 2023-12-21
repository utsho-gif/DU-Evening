import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';

const StudentSearch = () => {
  const searchSchema = yup.object().shape({
    regNo: yup.string().required('Registration number is required'),
    session: yup.string().required('Session is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(searchSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-75 student-search" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label htmlFor="registrationNumber">
            Registration Number <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration number"
            id="registrationNumber"
            {...register('regNo')}
          />
          <Form.Label>
            {errors.regNo && (
              <p className="text-danger">{errors.regNo.message}</p>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>
            Session <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register('session')}
          >
            <option value="">Select Session</option>
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
