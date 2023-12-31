import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { LuClipboardEdit } from 'react-icons/lu';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';

const AllProgram = () => {
  const [query, setQuery] = useState({});

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
      <PageTitle title={'Department'} />
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
