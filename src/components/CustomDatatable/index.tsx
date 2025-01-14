import { Button, Input, Table } from 'antd';
import { memo, useEffect, useState } from 'react';
import { BiDownload, BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { utils, writeFile } from 'xlsx';
import type { ColumnsType } from 'antd/es/table';

import { AxiosAuthInstance } from '../../config/api/auth';

interface IDownloadOptions {
  url: string;
  key?: any;
  URL?: any;
}
interface PropsType {
  title?: string;
  loading?: boolean;
  columns: ColumnsType;
  data: any[];
  query: any;
  setQuery: any;
  total?: number;
  downloadOptions?: IDownloadOptions;
  isPaginated?: boolean;
  isDownloadable?: boolean;
  isSearchable?: boolean;
  scroll?: any;
  isCustomDownload?: boolean;
}

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const DataTable = ({
  title = 'List',
  loading = false,
  columns = [],
  data = [],
  query,
  setQuery,
  total = 10,
  downloadOptions,
  isPaginated = true,
  isDownloadable = true,
  isSearchable = true,
  scroll = { x: 1300 },
  isCustomDownload = false,
}: PropsType) => {
  const [search, setSearch] = useState('');
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [searchInputVisible, setSearchInputVisible] = useState(false);

  const colObj = columns?.map((column: any) => ({
    ...column,
    key: column?.title,
  }));

  const handleDownload = async () => {
    try {
      setDownloadLoading(true);
      if (isDownloadable && downloadOptions?.url) {
        const res = await AxiosAuthInstance.get(downloadOptions?.url);
        const apiData = res?.data?.data[Object.keys(res?.data?.data)[0]]?.data;
        const sheetData = apiData?.length
          ? apiData?.map((data: any, idx: number) => {
              const obj: any = {
                'Serial No.': idx + 1,
              };
              let [key, value]: any = [];
              for ([key, value] of Object.entries(downloadOptions?.key)) {
                if (typeof value === 'object') {
                  obj[key] = value?.value(data[value?.field] ?? '');
                  continue;
                }
                if (value?.includes('.')) {
                  let nestedValue = data;
                  value
                    ?.split('.')
                    ?.forEach(
                      (nestedKey: any) =>
                        (nestedValue = nestedValue[nestedKey] ?? '')
                    );
                  obj[key] = nestedValue;
                  continue;
                }
                obj[key] = data[value] ?? '';
              }
              return obj;
            })
          : Object.keys(downloadOptions?.key)?.map((key: string) => ({
              [key]: '',
            }));

        const ws = utils.json_to_sheet(sheetData);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, 'Data');
        writeFile(wb, title + '.xlsx');
      }
      setDownloadLoading(false);
    } catch (error) {
      setDownloadLoading(false);
      console.log(error);
    }
  };

  const handleCustomDownload = async () => {
    try {
      setDownloadLoading(true);
      if (isCustomDownload && downloadOptions?.url) {
        const res = await AxiosAuthInstance.get(downloadOptions?.url);
        const link = document.createElement('a');
        link.href = downloadOptions.URL + '/' + res?.data?.data?.path;
        link.setAttribute('download', title + '.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
        setDownloadLoading(false);
      }
    } catch (error) {
      setDownloadLoading(false);
    }
  };

  const debouncedValue = useDebounce(search, 500);
  useEffect(() => {
    setQuery({ ...query, searchTerm: debouncedValue });
  }, [debouncedValue]);

  return (
    <Table
      showHeader={true}
      loading={loading}
      columns={colObj}
      scroll={scroll}
      dataSource={data}
      pagination={
        isPaginated && {
          responsive: true,
          showQuickJumper: true,
          showLessItems: true,
          defaultCurrent: query?.page ?? 1,
          defaultPageSize: query?.take ?? 10,
          showSizeChanger: true,
          onChange: (page: number, pageSize: number) =>
            setQuery({ ...query, page, take: pageSize }),
          total,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }
      }
      title={() =>
        (isDownloadable || isSearchable) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {isSearchable &&
              (searchInputVisible ? (
                <Input
                  bordered={false}
                  allowClear={{
                    clearIcon: (
                      <MdClear
                        title="Clear"
                        style={{ fontSize: 20, margin: 'auto' }}
                        onClick={() => setSearchInputVisible(false)}
                      />
                    ),
                  }}
                  suffix={
                    !search && (
                      <MdClear
                        title="Clear"
                        style={{
                          fontSize: 20,
                          margin: 'auto',
                          cursor: 'pointer',
                          opacity: 0.5,
                        }}
                        onClick={() => setSearchInputVisible(false)}
                      />
                    )
                  }
                  style={{
                    borderBottom: '2px solid #ccc',
                    width: 400,
                    boxShadow: 'none',
                  }}
                  prefix={
                    <BiSearch
                      style={{
                        fontSize: 20,
                        margin: 'auto',
                        opacity: 0.5,
                      }}
                    />
                  }
                  placeholder="Search ..."
                  value={search ?? ''}
                  onChange={(e: any) => setSearch(e?.target?.value)}
                />
              ) : (
                <Button
                  title="Search"
                  icon={
                    <BiSearch
                      style={{
                        fontSize: 20,
                        margin: 'auto',
                        display: 'flex',
                      }}
                    />
                  }
                  onClick={() => setSearchInputVisible(true)}
                />
              ))}
            {isDownloadable && (
              <Button
                title="Download"
                icon={<BiDownload style={{ fontSize: 20, margin: 'auto' }} />}
                onClick={handleDownload}
                loading={downloadLoading}
              />
            )}
            {isCustomDownload && (
              <Button
                title="Download"
                icon={<BiDownload style={{ fontSize: 20, margin: 'auto' }} />}
                onClick={handleCustomDownload}
                loading={downloadLoading}
              />
            )}
          </div>
        )
      }
    />
  );
};

const areEqual = (prevProps: any, nextProps: any) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export default memo(DataTable, areEqual);
