import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';

import { DataTable } from '../../../components/CustomDatatable';

const StudentList = () => {
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
    <div>
      <DataTable
        title="Student List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Session', dataIndex: 'session' },
          { title: 'Program', dataIndex: 'program' },
          { title: 'Department Name', dataIndex: 'depName' },
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          dummyData?.length
            ? dummyData.map((data) => ({
                slNo: tableIndex++,
                session: data?.session,
                program: data?.program,
                depName: data?.depName,
                action: (
                  <button className="btn text-white bg-success d-flex align-items-center">
                    <LiaEyeSolid />
                    &nbsp; Student
                  </button>
                ),
              }))
            : []
        }
        downloadOptions={{ url: '' }}
        query={{}}
        setQuery={(e) => setQuery({ ...query, ...e })}
      />
    </div>
  );
};

export default StudentList;
