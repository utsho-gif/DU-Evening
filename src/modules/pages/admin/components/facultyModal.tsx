import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { PostData } from '../../../../config/reactQuery';
import Loading from '../../../../components/Loading';
import { Type } from '../../../../enum';
import { FacultyTypes } from '../types';

interface IFacultyModal {
  showModal: boolean;
  facultyModalClose: () => void;
  setShowModal: (showModal: boolean) => void;
}

const FacultyModal: React.FC<IFacultyModal> = ({
  showModal,
  facultyModalClose,
  setShowModal,
}) => {
  const facultySchema = yup.object().shape({
    faculty: yup.string().required('Faculty is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(facultySchema) });

  const {
    mutate: facultyData,
    isLoading: facultyIsLoading,
    isSuccess: facultySuccess,
  } = PostData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_CREATE,
    successType: Type.SUCCESS,
    errorType: Type.ERROR,
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('faculty_name', data?.faculty);
    await facultyData(formData);
  };

  useEffect(() => {
    if (facultySuccess) {
      setShowModal(false);
      reset();
    }
  }, [facultySuccess, setShowModal, reset]);

  return (
    <Modal show={showModal} onHide={facultyModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Faculty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3 col-lg-12" controlId="faculty">
            <Form.Label>
              Faculty Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter faculty name"
              {...register('faculty')}
            />
            <Form.Label>
              {errors.faculty && (
                <p className="text-danger">{errors.faculty.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-end">
            <Button type="submit" className="button-style fw-semibold">
              {facultyIsLoading ? <Loading text="Loading..." /> : 'Submit'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FacultyModal;
