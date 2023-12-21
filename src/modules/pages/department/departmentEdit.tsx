import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { GrDocumentUpdate } from 'react-icons/gr';

const DepartmentEdit = () => {
  const editSchema = yup.object().shape({
    departmentName: yup.string().required('Department name is required'),
    contactNumber: yup.string().required('Contact number is required'),
    departmentEmail: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(editSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Form className="w-75 student-search" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="p-2 rounded-2 bg-success text-center text-white w-75 m-lg-auto mb-4 department-name">
            Department Name
          </h5>
          <Form.Group>
            <Form.Label htmlFor="departmentName">
              Department Name <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              id="departmentName"
              {...register('departmentName')}
            />
            <Form.Label>
              {errors.departmentName && (
                <p className="text-danger">{errors.departmentName.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="contactNumber">
              Contact Number <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact number"
              id="contactNumber"
              {...register('contactNumber')}
            />
            <Form.Label>
              {errors.contactNumber && (
                <p className="text-danger">{errors.contactNumber.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label htmlFor="departmentEmail">
              Department Email <span className="text-warning">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="departmentEmail"
              {...register('departmentEmail')}
            />
            <Form.Label>
              {errors.departmentEmail && (
                <p className="text-danger">{errors.departmentEmail.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              className="w-50 mt-4 search-button d-flex align-items-center justify-content-center"
              type="submit"
            >
              Update&nbsp; <GrDocumentUpdate />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default DepartmentEdit;
