import { Button, Form } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className="row gap-2">
        <div className="col-lg-5 department-exam">
          <div>
            <p className="text-center department-text">Change Exam Name</p>
          </div>
          <div>
            <Form>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Button
                type="submit"
                className="button-style fw-semibold w-100 mt-4"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-lg-6 department-exam ">
          <div className="text-center">Notice</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
