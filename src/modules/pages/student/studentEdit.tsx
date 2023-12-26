import { yupResolver } from '@hookform/resolvers/yup';
import { Upload } from 'antd';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { GrDocumentUpdate } from 'react-icons/gr';
import * as yup from 'yup';
import PageTitle from '../../../components/PageTitle';

const StudentEdit = () => {
  const [fileList, setFileList] = useState<any>([]);

  const editSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    fatherName: yup.string().required('Father name is required'),
    motherName: yup.string().required('Mother name is required'),
    nationality: yup.string().required('Nationality is required'),
    dob: yup.string().required('Date of birth is required'),
    gender: yup.string().required('Gender is required'),
    religion: yup.string().required('Religion is required'),
    cast: yup.string(),
    income: yup.string(),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    permanentAddress: yup
      .string()
      .required('House number, Road number / Village is required'),
    postOffice: yup.string().required('Post office is required'),
    policeStation: yup.string().required('Police station is required'),
    upazila: yup.string().required('Upazila is required'),
    district: yup.string().required('District is required'),
    presentAddress: yup
      .string()
      .required('House number, Road number / Village is required'),
    presentPostOffice: yup.string().required('Post office is required'),
    presentPoliceStation: yup.string().required('Police station is required'),
    presentUpazila: yup.string().required('Upazila is required'),
    presentDistrict: yup.string().required('District is required'),
  });

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(editSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  const uploadButton = (
    <div>
      <CiCirclePlus style={{ fontSize: '25px' }} />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <PageTitle title={'Student Profile Edit'} />
      <div className="d-flex align-items-center justify-content-center">
        <Form className="w-75 student-search" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="p-2 rounded-2 bg-success text-center text-white w-75 m-lg-auto mb-4 department-name">
            Student Name
          </h5>
          <div className="row col-lg-12 d-flex align-items-center justify-content-center mb-4">
            <Upload
              accept="image/*"
              listType="picture-circle"
              fileList={fileList}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="name">
                Name (বাংলা) <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                id="name"
                {...register('name')}
              />
              <Form.Label>
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
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
                {...register('phoneNumber')}
              />
              <Form.Label>
                {errors.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber.message}</p>
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
                {...register('fatherName')}
              />
              <Form.Label>
                {errors.fatherName && (
                  <p className="text-danger">{errors.fatherName.message}</p>
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
                {...register('motherName')}
              />
              <Form.Label>
                {errors.motherName && (
                  <p className="text-danger">{errors.motherName.message}</p>
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
                {...register('nationality')}
              />
              <Form.Label>
                {errors.nationality && (
                  <p className="text-danger">{errors.nationality.message}</p>
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
                {...register('dob')}
              />
              <Form.Label>
                {errors.dob && (
                  <p className="text-danger">{errors.dob.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="gender">
                Gender <span className="text-warning">*</span>
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register('gender')}
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </Form.Select>
              <Form.Label>
                {errors.gender && (
                  <p className="text-danger">{errors.gender.message}</p>
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
                {...register('religion')}
              />
              <Form.Label>
                {errors.religion && (
                  <p className="text-danger">{errors.religion.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="cast">Caste Sect</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter cast"
                id="cast"
                {...register('cast')}
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
                {...register('income')}
              />
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                {...register('email')}
              />
            </Form.Group>
          </div>
          <div className="row mt-4 text-decoration-underline">
            <h4>Permanent Address</h4>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="permanentAddress">
                House number, Road number / Village.{' '}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter House number, Road number / Village"
                id="permanentAddress"
                {...register('permanentAddress')}
              />
              <Form.Label>
                {errors.permanentAddress && (
                  <p className="text-danger">
                    {errors.permanentAddress.message}
                  </p>
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
                {...register('postOffice')}
              />
              <Form.Label>
                {errors.postOffice && (
                  <p className="text-danger">{errors.postOffice.message}</p>
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
                {...register('policeStation')}
              />
              <Form.Label>
                {errors.policeStation && (
                  <p className="text-danger">{errors.policeStation.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="upazila">
                Upazila <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter upa zilla"
                id="upazila"
                {...register('upazila')}
              />
              <Form.Label>
                {errors.upazila && (
                  <p className="text-danger">{errors.upazila.message}</p>
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
                {...register('district')}
              />
              <Form.Label>
                {errors.district && (
                  <p className="text-danger">{errors.district.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row mt-4 text-decoration-underline">
            <h4>Present Address</h4>
          </div>
          <div className="row">
            <Form.Group>
              <Form.Label htmlFor="presentAddress">
                House number, Road number / Village.{' '}
                <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter parents income"
                id="presentAddress"
                {...register('presentAddress')}
              />
              <Form.Label>
                {errors.presentAddress && (
                  <p className="text-danger">{errors.presentAddress.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="presentPostOffice">
                Post Office <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post office"
                id="presentPostOffice"
                {...register('presentPostOffice')}
              />
              <Form.Label>
                {errors.presentPostOffice && (
                  <p className="text-danger">
                    {errors.presentPostOffice.message}
                  </p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="presentPoliceStation">
                Police Station <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter police station"
                id="presentPoliceStation"
                {...register('presentPoliceStation')}
              />
              <Form.Label>
                {errors.presentPoliceStation && (
                  <p className="text-danger">
                    {errors.presentPoliceStation.message}
                  </p>
                )}
              </Form.Label>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="presentUpazila">
                Upazila <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter upazila"
                id="presentUpazila"
                {...register('presentUpazila')}
              />
              <Form.Label>
                {errors.presentUpazila && (
                  <p className="text-danger">{errors.presentUpazila.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label htmlFor="presentDistrict">
                District <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter district"
                id="presentDistrict"
                {...register('presentDistrict')}
              />
              <Form.Label>
                {errors.presentDistrict && (
                  <p className="text-danger">
                    {errors.presentDistrict.message}
                  </p>
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
