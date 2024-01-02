import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { LuClipboardEdit } from 'react-icons/lu';
import { FaPlusCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import DepartmentModal from './components/DepartmentModal';
import { Type } from '../../../enum';
import { PostData } from '../../../config/reactQuery';
import { DepartmentTypes } from './types';

const AllProgram = () => {
  const [query, setQuery] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const {
    mutate: departmentData,
    isLoading: departmentLoading,
    isSuccess: departmentSuccess,
  } = PostData({
    url: '/department',
    key: DepartmentTypes.DEPARTMENT_CREATE,
    successType: Type.SUCCESS,
    errorType: Type.ERROR,
  });

  const handleCloseFacultyModal = () => {
    setShowModal(false);
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
      <DepartmentModal
        showModal={showModal}
        facultyModalClose={handleCloseFacultyModal}
        setShowModal={setShowModal}
        departmentData={departmentData}
        departmentLoading={departmentLoading}
        departmentSuccess={departmentSuccess}
      />
      <PageTitle title={'Department'} />
      <div className="d-flex align-items-center justify-content-end mb-3">
        <Button
          onClick={() => handleShowModal()}
          className="d-flex align-items-center button-style"
        >
          Add Department&nbsp; <FaPlusCircle />
        </Button>
      </div>
      <DataTable
        title="Program List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Faculty', dataIndex: 'department' },
          { title: 'Department', dataIndex: 'program' },
          { title: 'Program & Password', dataIndex: 'student' },
          { title: 'Contact', dataIndex: 'student' },
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          dummyData?.length
            ? dummyData.map((data) => ({
                slNo: tableIndex++,
                department: data?.session,
                program: data?.program,
                student: data?.depName,
                action: (
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: '5px' }}
                  >
                    <button className="btn text-white bg-success d-flex align-items-center border-0">
                      <LiaEyeSolid />
                      &nbsp; View
                    </button>
                    <button className="btn text-white bg-info d-flex align-items-center border-0">
                      <LuClipboardEdit />
                      &nbsp; Edit
                    </button>
                  </div>
                ),
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

export default AllProgram;
