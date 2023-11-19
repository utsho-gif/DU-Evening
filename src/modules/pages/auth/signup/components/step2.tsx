// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Modal, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { CiCirclePlus } from 'react-icons/ci';
import { IFirstInfo } from '..';

interface ISecondInfo {
  firstInfo: IFirstInfo;
}

const SecondStep: React.FC<ISecondInfo> = ({ firstInfo }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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
          <Form style={{ width: '50%' }}>
            <Form.Group className="mb-3 col-lg-12" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center">
              <Button type="submit" className="button-style fw-semibold w-100">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
