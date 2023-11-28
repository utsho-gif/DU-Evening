import { yupResolver } from '@hookform/resolvers/yup';
import { Upload } from 'antd';
import type { UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import * as yup from 'yup';

import { IFirstInfo } from '..';
import { PostData } from '../../../../../config/reactQuery';

interface ISecondInfo {
  firstInfo: IFirstInfo;
  setFirstInfo: React.Dispatch<React.SetStateAction<IFirstInfo>>;
}

const SecondStep: React.FC<ISecondInfo> = ({ firstInfo, setFirstInfo }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fileList, setFileList] = useState<any>([]);
  const SignUpSecondSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required')
      .nullable(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(SignUpSecondSchema) });

  const { mutate: userData, isLoading } = PostData({
    url: '/user_create',
    key: 'userCreate',
    navigateOnSuccess: '/login',
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setFirstInfo({
      ...firstInfo,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    const formData = new FormData();
    formData.append('faculty', firstInfo?.faculty);
    formData.append('department', firstInfo?.department);
    formData.append('regno', firstInfo?.regno);
    formData.append('session', firstInfo?.session);
    formData.append('program', firstInfo?.program);
    formData.append('password', data?.password);
    formData.append('confirmPassword', data?.confirmPassword);
    await userData(formData);
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <CiCirclePlus style={{ fontSize: '25px' }} />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="my-5 container">
      <div className="row">
        <Table bordered hover size="lg">
          <tbody>
            <tr>
              <td>
                <h6 className="fw-bold">Department</h6>
              </td>
              <td>{firstInfo?.department}</td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-bold">Registration No.</h6>
              </td>
              <td>{firstInfo?.regno}</td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-bold">Program Name</h6>
              </td>
              <td>{firstInfo?.program}</td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-bold">Session</h6>
              </td>
              <td>{firstInfo?.session}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="row col-lg-12 d-flex align-items-center justify-content-center">
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
        <div className="d-flex align-items-center justify-content-center">
          <Form style={{ width: '50%' }} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 col-lg-12" controlId="password">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register('password')}
              />
              <Form.Label>
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="confirmPassword">
              <Form.Label>
                Confirm Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                {...register('confirmPassword')}
              />
              <Form.Label>
                {errors.confirmPassword && (
                  <p className="text-danger">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Form.Label>
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center">
              <Button type="submit" className="button-style fw-semibold w-100">
                {isLoading ? 'Loading' : 'Submit'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
