import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UseMutateFunction } from 'react-query';
import * as yup from 'yup';

import Loading from '../../../../../components/Loading';
import { FetchData } from '../../../../../config/reactQuery';
import { DepartmentTypes, FacultyTypes } from '../../types';

interface IProgramModal {
  showModal: boolean;
  programModalClose: () => void;
  setShowModal: (showModal: boolean) => void;
  programData: UseMutateFunction<any, any, any, unknown>;
  programLoading: boolean;
  programSuccess: boolean;
}

const ProgramModal: React.FC<IProgramModal> = ({
  showModal,
  programModalClose,
  setShowModal,
  programData,
  programLoading,
  programSuccess,
}) => {
  const facultyState = FetchData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_GET,
  });

  const facultySchema = yup.object().shape({
    faculty: yup.string().required('Faculty is required'),
    department: yup.string().required('Department is required'),
    program: yup.string().required('Program is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ resolver: yupResolver(facultySchema) });

  const departmentState = FetchData({
    url: `/department/${Number(watch('faculty'))}`,
    key: DepartmentTypes.DEPARTMENT_GET,
    optionalKey: Number(watch('faculty')),
    dependency: true,
    dependencyValue: Number(watch('faculty')),
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('department_id', data?.department);
    formData.append('program_name', data?.program);
    await programData(formData);
  };

  useEffect(() => {
    if (programSuccess) {
      setShowModal(false);
      reset();
    }
  }, [programSuccess, setShowModal, reset]);

  return (
    <Modal show={showModal} onHide={programModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Program</Modal.Title>
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
                : []}
            </Form.Select>
            <Form.Label>
              {errors.faculty && (
                <p className="text-danger">{errors.faculty.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="col-lg-12" controlId="department">
            <Form.Label>
              Department <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select {...register('department')}>
              <option value="">Select Department</option>
              {departmentState?.data?.departments?.length
                ? departmentState?.data?.departments?.map((department: any) => (
                    <option key={department?.id} value={department?.id}>
                      {department?.department_name}
                    </option>
                  ))
                : []}
            </Form.Select>
            <Form.Label>
              {errors.department && (
                <p className="text-danger">{errors.department.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-2 col-lg-12" controlId="Program">
            <Form.Label>
              Program Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Program name"
              {...register('program')}
            />
            <Form.Label>
              {errors.program && (
                <p className="text-danger">{errors.program.message}</p>
              )}
            </Form.Label>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-end">
            <Button type="submit" className="button-style fw-semibold">
              {programLoading ? <Loading text="Loading..." /> : 'Submit'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProgramModal;
