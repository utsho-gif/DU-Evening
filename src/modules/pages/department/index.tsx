import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PageTitle from '../../../components/PageTitle';

const Home = () => {
  const examSchema = yup.object().shape({
    departmentExam: yup.string().required('This field must not be empty'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(examSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <PageTitle title={'Home'} />
      <div className="row gap-2">
        <div className="col-lg-5 department-exam">
          <div>
            <p className="text-center department-text">Change Exam Name</p>
          </div>
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Select
                aria-label="Default select example"
                {...register('departmentExam')}
              >
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label>
                {errors.departmentExam && (
                  <p className="text-danger">{errors.departmentExam.message}</p>
                )}
              </Form.Label>
              <Button
                type="submit"
                className="button-style fw-semibold w-100 mt-4 text-white"
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
    </>
  );
};

export default Home;
