import moment from 'moment';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';
import { DeleteData, FetchData, PostData } from '../../../config/reactQuery';
import { Type } from '../../../enum';
import FacultyModal from './components/facultyModal';
import { FacultyTypes } from './types';
import DeleteModal from '../../../components/DeleteModal';

const Faculty = () => {
  const [query, setQuery] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [id, setId] = useState();

  const facultyState = FetchData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_GET,
  });

  const {
    mutate: facultyData,
    isLoading: facultyIsLoading,
    isSuccess: facultySuccess,
  } = PostData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_CREATE,
    successType: Type.SUCCESS,
    errorType: Type.ERROR,
  });

  const {
    mutate: deleteCategory,
    isLoading: isDeleteCategoryLoading,
    isSuccess: isDeleteSuccess,
  } = DeleteData({
    url: '/faculty',
    key: FacultyTypes.FACULTY_DELETE,
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseFacultyModal = () => {
    setShowModal(false);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id: any) => {
    setId(id);
    setDeleteShow(true);
  };

  let tableIndex = 1;

  useEffect(() => {
    if (facultySuccess || isDeleteSuccess) {
      facultyState.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facultySuccess, isDeleteSuccess]);

  return (
    <>
      <FacultyModal
        showModal={showModal}
        facultyModalClose={handleCloseFacultyModal}
        setShowModal={setShowModal}
        facultyData={facultyData}
        facultyIsLoading={facultyIsLoading}
        facultySuccess={facultySuccess}
      />

      <DeleteModal
        handleClose={deleteHandleClose}
        show={deleteShow}
        onDelete={deleteCategory}
        isLoading={isDeleteCategoryLoading}
        selected={id}
      />
      <PageTitle title={'Faculty'} />
      <div className="d-flex align-items-center justify-content-end mb-3">
        <Button
          onClick={() => handleShowModal()}
          className="d-flex align-items-center button-style"
        >
          Add Faculty&nbsp; <FaPlusCircle />
        </Button>
      </div>
      <DataTable
        title="Faculty List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Faculty Name', dataIndex: 'faculty' },
          { title: 'Created', dataIndex: 'created' },
          { title: 'Action', dataIndex: 'delete' },
        ]}
        data={
          facultyState?.data?.faculties?.length
            ? facultyState?.data?.faculties?.map((faculty: any) => ({
                slNo: tableIndex++,
                faculty: faculty?.faculty_name,
                created: moment(faculty?.created_at).format(
                  'MMMM Do YYYY, h:mm:ss a'
                ),
                delete: (
                  <Button
                    variant="danger"
                    onClick={() => deleteHandleShow(faculty.id)}
                  >
                    <MdDelete />
                  </Button>
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

export default Faculty;
