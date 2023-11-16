import { Modal, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { CiCirclePlus } from 'react-icons/ci';
import { IFirstInfo } from '..';

interface ISecondInfo {
  firstInfo: IFirstInfo;
}

const SecondStep: React.FC<ISecondInfo> = ({ firstInfo }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <CiCirclePlus />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCancel = () => setPreviewOpen(false);

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
      <div className="row">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-circle"
          fileList={fileList}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
          <img alt="example" style={{ width: '100%' }} />
        </Modal>
      </div>
    </div>
  );
};

export default SecondStep;
