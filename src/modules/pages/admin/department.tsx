import { useEffect, useState } from 'react';
import { LuClipboardEdit } from 'react-icons/lu';
import { FaPlusCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import moment from 'moment';
import { Tooltip } from 'antd';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import DepartmentModal from './components/DepartmentModal';
import { Type } from '../../../enum';
import { DeleteData, FetchData, PostData } from '../../../config/reactQuery';
import { DepartmentTypes } from './types';
import DeleteModal from '../../../components/DeleteModal';

const AllProgram = () => {
  const [query, setQuery] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [id, setId] = useState<number>();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const departmentState = FetchData({
    url: '/department',
    key: DepartmentTypes.DEPARTMENT_GET,
  });

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

  const {
    mutate: deleteDepartment,
    isLoading: isDeleteCategoryLoading,
    isSuccess: isDeleteSuccess,
  } = DeleteData({
    url: '/department',
    key: DepartmentTypes.DEPARTMENT_DELETE,
  });

  const handleCloseFacultyModal = () => {
    setShowModal(false);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id: number) => {
    setId(id);
    setDeleteShow(true);
  };

  let tableIndex = 1;

  useEffect(() => {
    if (departmentSuccess || isDeleteSuccess) {
      departmentState.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [departmentSuccess, isDeleteSuccess]);

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

      <DeleteModal
        handleClose={deleteHandleClose}
        show={deleteShow}
        onDelete={deleteDepartment}
        isLoading={isDeleteCategoryLoading}
        selected={id}
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
          { title: 'Faculty', dataIndex: 'faculty' },
          { title: 'Department', dataIndex: 'department' },
          { title: 'Created At', dataIndex: 'created' },
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          departmentState?.data?.departments?.length
            ? departmentState?.data?.departments?.map((department: any) => ({
                slNo: tableIndex++,
                faculty: department?.faculty?.faculty_name,
                department: department?.department_name,
                created: moment(department?.created_at).format(
                  'MMMM Do YYYY, h:mm:ss a'
                ),
                action: (
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: '5px' }}
                  >
                    <Tooltip title="Delete" color={'red'}>
                      <Button
                        title="Delete"
                        variant="danger"
                        onClick={() => deleteHandleShow(department.id)}
                      >
                        <MdDelete />
                      </Button>
                    </Tooltip>
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
