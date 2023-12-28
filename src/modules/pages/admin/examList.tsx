import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';

const ExamList = () => {
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
      <PageTitle title={'Exam List'} />
      <DataTable
        title="Exam List"
        columns={[
          { title: 'SL No.', dataIndex: 'slNo' },
          { title: 'Exam Name', dataIndex: 'examName' },
          { title: 'Program', dataIndex: 'program' },
          { title: 'Department Name', dataIndex: 'depName' },
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          dummyData?.length
            ? dummyData.map((data) => ({
                slNo: tableIndex++,
                examName: data?.session,
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
    </>
  );
};

export default ExamList;
