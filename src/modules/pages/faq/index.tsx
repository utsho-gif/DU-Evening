import { Button, Table } from 'react-bootstrap';
import { ImEye } from 'react-icons/im';

const FAQPage = () => {
  return (
    <div className="my-4 forget-password-box">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="forget-password-font">INFO</h1>
        </div>
      </div>
      <div className="row">
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th className="col-lg-8 col-md-6">Programs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Important Notice</td>
              <td>
                <Button
                  className="d-flex align-items-center justify-content-center w-100"
                  variant="success"
                >
                  <ImEye /> &nbsp; View Notice
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Important Notice</td>
              <td>
                <Button
                  className="d-flex align-items-center justify-content-center w-100"
                  variant="success"
                >
                  <ImEye /> &nbsp; View Notice
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FAQPage;
