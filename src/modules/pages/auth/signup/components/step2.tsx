import { Table } from 'react-bootstrap';
import { IFirstInfo } from '..';

interface ISecondInfo {
  firstInfo: IFirstInfo;
}

const SecondStep: React.FC<ISecondInfo> = ({ firstInfo }) => {
  console.log(firstInfo);
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
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-4">
          <img
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU"
            alt=""
          />
        </div>
        <div className="col-lg-4">
          <input
            type="file"
            name="profileImage"
            className="form-control"
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
