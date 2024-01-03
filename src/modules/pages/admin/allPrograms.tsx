import { useEffect, useState } from 'react';
// import { LiaEyeSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlusCircle } from 'react-icons/fa';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import { Button } from 'react-bootstrap';
import ProgramModal from './components/ProgramModal';
import { DeleteData, FetchData, PostData } from '../../../config/reactQuery';
import { ProgramTypes } from './types';
import { Type } from '../../../enum';
import DeleteModal from '../../../components/DeleteModal';

const AllProgram = () => {
  const [query, setQuery] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [id, setId] = useState<number>();

  const programState = FetchData({
    url: '/program',
    key: ProgramTypes.PROGRAM_GET,
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseProgramModal = () => {
    setShowModal(false);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id: number) => {
    setId(id);
    setDeleteShow(true);
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

  const {
    mutate: deleteProgram,
    isLoading: isDeleteProgramLoading,
    isSuccess: isDeleteSuccess,
  } = DeleteData({
    url: '/program',
    key: ProgramTypes.PROGRAM_DELETE,
  });

  useEffect(() => {
    if (programSuccess || isDeleteSuccess) {
      programState.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programSuccess, isDeleteSuccess]);

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
      <DeleteModal
        handleClose={deleteHandleClose}
        show={deleteShow}
        onDelete={deleteProgram}
        isLoading={isDeleteProgramLoading}
        selected={id}
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
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          programState?.data?.programs?.length
            ? programState?.data?.programs?.map((program: any) => ({
                slNo: tableIndex++,
                faculty: program?.department?.faculty?.faculty_name,
                department: program?.department?.department_name,
                program: program?.program_name,
                action: (
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: '5px' }}
                  >
                    {/* <button className="btn text-white bg-success d-flex align-items-center border-0">
                      <LiaEyeSolid />
                      &nbsp; View
                    </button> */}
                    <button
                      className="btn text-white bg-danger d-flex align-items-center border-0"
                      onClick={() => deleteHandleShow(program.id)}
                    >
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
