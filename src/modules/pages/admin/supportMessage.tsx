import { useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { DataTable } from '../../../components/CustomDatatable';
import PageTitle from '../../../components/PageTitle';

const SupportMessage = () => {
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
          { title: 'Registration Number', dataIndex: 'regNo' },
          { title: 'Message', dataIndex: 'message' },
          { title: 'Date', dataIndex: 'date' },
          { title: 'Action', dataIndex: 'action' },
        ]}
        data={
          dummyData?.length
            ? dummyData.map((data) => ({
                slNo: tableIndex++,
                regNo: data?.session,
                message: data?.program,
                date: data?.depName,
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

export default SupportMessage;
