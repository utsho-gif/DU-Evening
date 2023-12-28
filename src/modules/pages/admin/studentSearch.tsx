import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import PageTitle from '../../../components/PageTitle';

const StudentSearch = () => {
  const searchSchema = yup.object().shape({
    faculty: yup.string().required('Faculty is required'),
    department: yup.string().required('Department is required'),
    session: yup.string().required('Session is required'),
    regNo: yup.string().required('Registration number is required'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(searchSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle title={'Student Search'} />
      <div className="d-flex align-items-center justify-content-center">
        <Form
          className="w-100 student-search"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Faculty</Form.Label>
              <Form.Select defaultValue="" {...register('faculty')}>
                <option value="">Select Faculty</option>
                <option value="1">Science</option>
                <option value="2">Arts</option>
                <option value="3">Commerce</option>
              </Form.Select>
              <Form.Label>
                {errors.faculty && (
                  <p className="text-danger">{errors.faculty.message}</p>
                )}
              </Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Department</Form.Label>
              <Form.Select defaultValue="" {...register('department')}>
                <option value="">Select Department</option>
                <option value="1">Physics</option>
                <option value="2">Chemistry</option>
                <option value="3">Biology</option>
              </Form.Select>
              <Form.Label>
                {errors.department && (
                  <p className="text-danger">{errors.department.message}</p>
                )}
              </Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Session</Form.Label>
              <Form.Select defaultValue="" {...register('session')}>
                <option value="">Select Session</option>
                <option value="1">2022-2023</option>
                <option value="2">2020-2021</option>
                <option value="3">2018-2019</option>
              </Form.Select>
              <Form.Label>
                {errors.session && (
                  <p className="text-danger">{errors.session.message}</p>
                )}
              </Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Registration Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter registration number"
                {...register('regNo')}
              />
              <Form.Label>
                {errors.regNo && (
                  <p className="text-danger">{errors.regNo.message}</p>
                )}
              </Form.Label>
            </Form.Group>
          </Row>
          <div className="d-flex align-items-center justify-content-center">
            <Button className="w-50 mt-4 search-button" type="submit">
              Search <BiSearchAlt />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default StudentSearch;
