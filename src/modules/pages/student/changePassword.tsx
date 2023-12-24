import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IoKeyOutline } from 'react-icons/io5';

const ChangePassword = () => {
  const ChangePasswordSchema = yup.object().shape({
    currentPassword: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    newPassword: yup
      .string()
      .min(8, 'New Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required('Confirm Password is required')
      .nullable(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(ChangePasswordSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-75 student-search" onSubmit={handleSubmit(onSubmit)}>
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
            {...register('currentPassword')}
          />
          <Form.Label>
            {errors.currentPassword && (
              <p className="text-danger">{errors.currentPassword.message}</p>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="newPassword">
            New Password <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            id="newPassword"
            {...register('newPassword')}
          />
          <Form.Label>
            {errors.newPassword && (
              <p className="text-danger">{errors.newPassword.message}</p>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="confirmPassword">
            Confirm Password <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirm password"
            id="confirmPassword"
            {...register('confirmPassword')}
          />
          <Form.Label>
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword.message}</p>
            )}
          </Form.Label>
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
