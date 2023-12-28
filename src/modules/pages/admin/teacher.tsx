import { useState } from 'react';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';

const Teacher = () => {
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
      <PageTitle title={'Support Message'} />
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

export default Teacher;
