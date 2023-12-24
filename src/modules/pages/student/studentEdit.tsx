import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { GrDocumentUpdate } from 'react-icons/gr';

const StudentEdit = () => {
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
            Student Name
          </h5>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="name">
                Name (বাংলা) <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                id="name"
                {...register('departmentName')}
              />
              <Form.Label>
                {errors.departmentName && (
                  <p className="text-danger">{errors.departmentName.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="phoneNumber">
                Phone Number <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                id="phoneNumber"
                {...register('departmentName')}
              />
              <Form.Label>
                {errors.departmentName && (
                  <p className="text-danger">{errors.departmentName.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="fatherName">
                Fathers Name <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter father name"
                id="fatherName"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="motherName">
                Mothers Name <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mother name"
                id="motherName"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="nationality">
                Nationality <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nationality"
                id="nationality"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="dob">
                DOB <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                id="dob"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="dob">
                Gender <span className="text-warning">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register('contactNumber')}
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="religion">
                Religion <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter religion"
                id="religion"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="cast">Caste Sect</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter cast"
                id="cast"
                {...register('contactNumber')}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="income">Parents/Guardian Income</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter parents income"
                id="income"
                {...register('contactNumber')}
              />
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                {...register('contactNumber')}
              />
            </Form.Group>
          </div>
          <div className="row mt-4 text-decoration-underline">
            <h4>Permanent Address</h4>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="income">
                House number, Road number / Village.{' '}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter parents income"
                id="income"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="postOffice">
                Post Office <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post Office"
                id="postOffice"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="policeStation">
                Police Station <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter police station"
                id="policeStation"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="upazila">
                Upa Zilla <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter upa zilla"
                id="upazila"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="district">
                District <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter district"
                id="district"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row mt-4 text-decoration-underline">
            <h4>Present Address</h4>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="income">
                House number, Road number / Village.{' '}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter parents income"
                id="income"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="postOffice">
                Post Office <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post Office"
                id="postOffice"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="policeStation">
                Police Station <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter police station"
                id="policeStation"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="upazila">
                Upa Zilla <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter upa zilla"
                id="upazila"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="district">
                District <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter district"
                id="district"
                {...register('contactNumber')}
              />
              <Form.Label>
                {errors.contactNumber && (
                  <p className="text-danger">{errors.contactNumber.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
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

export default StudentEdit;
