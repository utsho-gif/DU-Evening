import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlusCircle } from 'react-icons/fa';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import { Button } from 'react-bootstrap';
import ProgramModal from './components/ProgramModal';
import { PostData } from '../../../config/reactQuery';
import { ProgramTypes } from './types';
import { Type } from '../../../enum';

const AllProgram = () => {
  const [query, setQuery] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseProgramModal = () => {
    setShowModal(false);
  };

  const {
    mutate: programData,
    isLoading: programLoading,
    isSuccess: programSuccess,
  } = PostData({
    url: '/program',
    key: ProgramTypes.PROGRAM_CREATE,
    successType: Type.SUCCESS,
    errorType: Type.ERROR,
  });

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
      <ProgramModal
        showModal={showModal}
        programModalClose={handleCloseProgramModal}
        setShowModal={setShowModal}
        programData={programData}
        programLoading={programLoading}
        programSuccess={programSuccess}
      />
      <PageTitle title={'Programs'} />
      <div className="d-flex align-items-center justify-content-end mb-3">
        <Button
          onClick={() => handleShowModal()}
          className="d-flex align-items-center button-style"
        >
          Add Program&nbsp; <FaPlusCircle />
        </Button>
      </div>
      <DataTable
        title="Program List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Faculty', dataIndex: 'faculty' },
          { title: 'Department', dataIndex: 'department' },
          { title: 'Program Name', dataIndex: 'program' },
          { title: 'Total Students', dataIndex: 'student' },
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
                    <button className="btn text-white bg-danger d-flex align-items-center border-0">
                      <RiDeleteBin6Line />
                      &nbsp; Delete
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
