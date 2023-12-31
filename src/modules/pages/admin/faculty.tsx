import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import FacultyModal from './components/facultyModal';

const Faculty = () => {
  const [query, setQuery] = useState({});
  const [facultyShowModal, setFacultyShowModal] = useState(false);

  const handleShowModal = () => {
    setFacultyShowModal(true);
  };

  const handleCloseFacultyModal = () => {
    setFacultyShowModal(false);
  };

  const dummyData = [
    {
      session: '2019-2020',
      program: 'MBA',
      depName: 'Physics',
    },
    {
      session: '2020-2021',
      program: 'MBA',
      depName: 'Biology',
    },
  ];

  let tableIndex = 1;

  return (
    <>
      <FacultyModal
        facultyShowModal={facultyShowModal}
        facultyModalClose={handleCloseFacultyModal}
      />
      <PageTitle title={'Teachers'} />
      <div className="d-flex align-items-center justify-content-end mb-3">
        <Button
          onClick={() => handleShowModal()}
          variant="success"
          className="d-flex align-items-center"
        >
          Add Faculty&nbsp; <FaPlusCircle />
        </Button>
      </div>
      <DataTable
        title="Message List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Teacher Name', dataIndex: 'regNo' },
          { title: 'Phone', dataIndex: 'message' },
          { title: 'Email', dataIndex: 'date' },
          { title: 'Designation', dataIndex: 'date' },
          { title: 'Department', dataIndex: 'date' },
        ]}
        data={
          dummyData?.length
            ? dummyData.map((data) => ({
                slNo: tableIndex++,
                regNo: data?.session,
                message: data?.program,
                date: data?.depName,
              }))
            : []
        }
        downloadOptions={{ url: '' }}
        query={{}}
        setQuery={(e) => setQuery({ ...query, ...e })}
      />
    </>
  );
};

export default Faculty;
