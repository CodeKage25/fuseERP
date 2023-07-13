import React, { useMemo, useEffect, useState } from "react";
import { Data } from "../../helpers/data";
import { dataType } from "../../helpers/types";
import { ReactComponent as Cell } from "../../assets/icons/Cell.svg";
import { ReactComponent as Export } from "../../assets/icons/Export.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import "regenerator-runtime/runtime";

import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
  useRowSelect,
  TableInstance,
  Column,
  Row,
} from "react-table";
import { useRowSelectColumn } from "@lineup-lite/hooks";
import { useCustomPagination } from "./useCustomPagination";
// import { Button, PageButton } from '../../contexts/Button';
import { classNames } from "../../contexts/utils";
import { GrFormSearch } from "react-icons/gr";

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
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const onChange = useAsyncDebounce((value: string | undefined) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="flex items-center justify-between w-[100%] pl-6 pt-10 pb-10">
      <span className="flex w-[60%]">
        <GrFormSearch
          fontSize={24}
          color="gray"
          className="absolute flex justify-center items-center text-center text-gray-500 mt-2 ml-2 "
        />
        <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          className=" rounded border-1.2 border-solid h-[36px] w-[400px] font-mullish text-center text-sm font-medium leading-5 tracking-widest not-italic border-gray-300 text-gray-500 cursor-pointer "
          type="search"
          placeholder={placeholder}
        />

        <div>
          <select
            value={statusFilter || ""}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setStatusFilter(selectedValue || null);
            }}
            className=" flex rounded border border-solid border-gray-200 items-center ml-2 p-2 w-[90px] bg-white font-mullish text-center text-sm font-medium leading-5 tracking-widest not-italic text-gray-600 "
          >
            <option value="">Status</option>
            <option value="issued">Issued</option>
            <option value="completed">Completed</option>
            <option value="draft">Draft</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </span>
      {/* <div className=" flex gap-[8px]"> */}
        <div className="flex items-center w-[40%] gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <div>Sort</div>
            <div>
              <select className=" flex rounded border border-solid border-gray-200 items-center ml-2 p-2 w-[150px] bg-white font-mullish text-center text-sm font-medium leading-5 tracking-widest not-italic text-gray-600 ">
                <option value="">Date Added</option>
              </select>
            </div>
          </div>
          <div>
          <span className=" relative w-[100%]">
            <Export className="absolute top-[20px] left-[8px] z-10" />
              <select className=" flex rounded border pl-4 border-solid border-gray-200 items-center ml-2 p-2 w-[95px] bg-white font-mullish text-center text-sm font-medium leading-5 tracking-widest not-italic text-gray-600 ">
                <option className="pl-6" value="">Export</option>
              </select>
            </span>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export function StatusPill({ value }: StatusPillProps) {
  const status = value ? value : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("Successful") ? "bg-green-100 text-green-700" : null,
        status.startsWith("Progressing")
          ? "bg-yellow-100 text-yellow-700"
          : null,
        status.startsWith("Failed") ? "bg-red-100 text-red-700" : null
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
        Header: "#Purchase Order",
        accessor: "purchase_order",
      },
      {
        Header: "Date Created",
        accessor: "date_created",
      },
      {
        Header: "Vendor Name",
        accessor: "vendor_name",
      },
      {
        Header: "Expected Delivery Date",
        accessor: "expected_delivery_date",
      },
      {
        Header: "Purchase Order Amount",
        accessor: "purchase_order_amount",
      },
      {
        Header: "Outstanding Balance",
        accessor: "oustanding_balance",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: <Cell />,
        accessor: "dot",
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
      // initialState: { filters: [{ id: 'status', value: null }] }, // Apply initial filter state
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

  // const filteredRows = statusFilter
  //   ? rows.filter((row: Row<dataType>) => row.values.status === statusFilter)
  //   : rows;

  return (
    <div className="bg-white w-[100%]">
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
        placeholder={placeholder}
      />
      <div className="border-8 border-gray-100 bg-white w-[100%]">
        <table {...getTableProps()} className="">
          <thead className="border-t border-b border-solid bg-gray-50 border-t-gray-50 border-b-gray-50">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="">
            {rows.map((row: Row<dataType>) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="w-[100%] border-b border-b-gray-100 h-[50px] gap-2px items-center"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-2">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex w-[100%] justify-between items-center">
        <div className="flex items-center gap-[8px]">
        {paginationRange?.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => gotoPage(Number(pageNumber))}
            disabled={pageIndex === pageNumber}
          >
            {`page ${pageNumber} of ${pageCount} `}
          </button>
        ))}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <ArrowLeft />
        </button>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          1
        </button>
        <button onClick={() => gotoPage(1)} disabled={!canPreviousPage}>
          2
        </button>
        <button onClick={() => gotoPage(2)} disabled={!canPreviousPage}>
          3
        </button>
        {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          Last
        </button> */}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
        <ArrowRight />
        </button>
        </div>
        <div className="flex items-center gap-[8px]">
          <div>Show:</div>
          <div>
            <select className=" flex h-[36px] rounded border border-solid border-gray-200 items-center ml-2 p-2 w-[150px] bg-white font-mullish text-center text-sm font-medium leading-5 tracking-widest not-italic text-gray-600 ">
                <option value="">10 rows</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
