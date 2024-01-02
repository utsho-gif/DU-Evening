import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UseMutateFunction } from 'react-query';
import * as yup from 'yup';

import Loading from '../../../../../components/Loading';
import { FetchData } from '../../../../../config/reactQuery';
import { FacultyTypes } from '../../types';

interface IFacultyModal {
  showModal: boolean;
  facultyModalClose: () => void;
  setShowModal: (showModal: boolean) => void;
  departmentData: UseMutateFunction<any, any, any, unknown>;
  departmentLoading: boolean;
  departmentSuccess: boolean;
}

const FacultyModal: React.FC<IFacultyModal> = ({
  showModal,
  facultyModalClose,
  setShowModal,
  departmentData,
  departmentLoading,
  departmentSuccess,
}) => {
  const facultyState = FetchData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_GET,
  });

  const facultySchema = yup.object().shape({
    faculty: yup.string().required('Faculty is required'),
    department: yup.string().required('Department is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(facultySchema) });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('department_name', data?.department);
    formData.append('faculty_id', data?.faculty);
    await departmentData(formData);
  };

  useEffect(() => {
    if (departmentSuccess) {
      setShowModal(false);
      reset();
    }
  }, [departmentSuccess, setShowModal, reset]);

  return (
    <Modal show={showModal} onHide={facultyModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Faculty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="col-lg-12" controlId="faculty">
            <Form.Label>
              Faculty <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select {...register('faculty')}>
              <option value="">Select Faculty</option>
              {facultyState?.data?.faculties?.length
                ? facultyState?.data?.faculties?.map((faculty: any) => (
                    <option key={faculty?.id} value={faculty?.id}>
                      {faculty?.faculty_name}
                    </option>
                  ))
                : ''}
            </Form.Select>
            <Form.Label>
              {errors.faculty && (
                <p className="text-danger">{errors.faculty.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-2 col-lg-12" controlId="department">
            <Form.Label>
              Department Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              {...register('department')}
            />
            <Form.Label>
              {errors.department && (
                <p className="text-danger">{errors.department.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-end">
            <Button type="submit" className="button-style fw-semibold">
              {departmentLoading ? <Loading text="Loading..." /> : 'Submit'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FacultyModal;
