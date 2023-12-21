import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IoIosPersonAdd } from 'react-icons/io';

const Teachers = () => {
  const teacherSchema = yup.object().shape({
    teacherName: yup.string().required('Teacher name is required'),
    designation: yup.string().required('Designation is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    department: yup.string().required('Department is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(teacherSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h3 className="text-center mb-3">Department Name</h3>
      <div className="d-flex align-items-center justify-content-center">
        <Form className="w-75 student-search" onSubmit={handleSubmit(onSubmit)}>
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
              {...register('teacherName')}
            />
            <Form.Label>
              {errors.teacherName && (
                <p className="text-danger">{errors.teacherName.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="designation">
              Designation <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter designation"
              id="designation"
              {...register('designation')}
            />
            <Form.Label>
              {errors.designation && (
                <p className="text-danger">{errors.designation.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="phoneNumber">
              Phone Number <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              id="phoneNumber"
              {...register('phoneNumber')}
            />
            <Form.Label>
              {errors.phoneNumber && (
                <p className="text-danger">{errors.phoneNumber.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="email">
              Email <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              {...register('email')}
            />
            <Form.Label>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="department">
              Department <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              id="department"
              {...register('department')}
            />
            <Form.Label>
              {errors.department && (
                <p className="text-danger">{errors.department.message}</p>
              )}
            </Form.Label>
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
