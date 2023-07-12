import React, { useMemo, useEffect, useState } from 'react';
import { Data } from '../../helpers/data';
import { dataType } from '../../helpers/types';
import 'regenerator-runtime/runtime';

import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useRowSelect,
  TableInstance,
  Column,
  Row,
} from 'react-table';
import { useRowSelectColumn } from '@lineup-lite/hooks';
import { useCustomPagination } from './useCustomPagination';
// import { Button, PageButton } from '../../contexts/Button';
import { classNames } from '../../contexts/utils';
import { GrFormSearch } from 'react-icons/gr';

interface GlobalFilterProps {
  preGlobalFilteredRows: Row<dataType>[];
  globalFilter: string | undefined;
  setGlobalFilter: (filter: string | undefined) => void;
  placeholder: string;
}

interface StatusPillProps {
  value: string;
}

interface TableProps {
  placeholder: string;
}

export function GlobalFilter({
  // preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  placeholder,
}: GlobalFilterProps) {
  // const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(
    (value: string | undefined) => {
      setGlobalFilter(value || undefined);
    },
    200
  );

  return (
    <span className='flex justify-between  pt-10 pb-10 '>
       <GrFormSearch fontSize={38} color='gray' className='absolute text-center text-gray-500 mt-3 ml-3 min-w-40'/>
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className='w-8/12 rounded-xl border p-4 text-gray-500 cursor-pointer' 
          type="search"  
          placeholder={placeholder}
        />
         <button 
        className='bg-white rounded-xl p-4 border-1 cursor-pointer'>
            Export
        </button>
      </span>
  );
}

export function StatusPill({ value }: StatusPillProps) {
  const status = value ? value : 'unknown';

  return (
    <span
      className={classNames(
        'px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm',
        status.startsWith('Successful') ? 'bg-green-100 text-green-700' : null,
        status.startsWith('Progressing') ? 'bg-yellow-100 text-yellow-700' : null,
        status.startsWith('Failed') ? 'bg-red-100 text-red-700' : null
      )}
    >
      {status}
    </span>
  );
}

const Table: React.FC<TableProps> = ({ placeholder }) => {
  const data = useMemo(() => Data, []);
  const columns: Column<dataType>[] = useMemo(
    () => [
      {
        Header: '#Purchase Order',
        accessor: 'purchase_order',
      },
      {
        Header: 'Date Created',
        accessor: 'date_created',
      },
      {
        Header: 'Vendor Name',
        accessor: 'vendor_name',
      },
      {
        Header: 'Expected Delivery Date',
        accessor: 'expected_delivery_date',
      },
      {
        Header: 'Purchase Order Amount',
        accessor: 'purchase_order_amount',
      },
      {
        Header: 'Outstanding Balance',
        accessor: 'oustanding_balance',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable<dataType>(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useRowSelectColumn
  ) as TableInstance<dataType> & {
    canPreviousPage: boolean;
    canNextPage: boolean;
    nextPage: () => void;
    previousPage: () => void;
    gotoPage: (pageIndex: number) => void;
    pageCount: number;
    setPageSize: (pageSize: number) => void;
    state: any;
    preGlobalFilteredRows: Row<dataType>[];
    setGlobalFilter: (filterValue?: string | undefined) => void;
  };

  const { pageIndex } = state;

  const paginationRange = useCustomPagination({
    totalPageCount: pageCount || 0,
    currentPage: pageIndex,
  });
  console.log(paginationRange);

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        placeholder={placeholder}
      />
      <table {...getTableProps()} className="mt-4">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: Row<dataType>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          First
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        {paginationRange?.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => gotoPage(Number(pageNumber))}
            disabled={pageIndex === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          Last
        </button>
      </div>
    </div>
  );
};

export default Table;
