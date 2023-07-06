import React, {useMemo} from 'react';
import { Data } from '../../helpers/data';
import { useTable,
  useGlobalFilter, 
  useAsyncDebounce,  
  usePagination, 
  useRowSelect} from "react-table";
  import { useRowSelectColumn } from '@lineup-lite/hooks';
function Table() {
  const data = useMemo(() => Data, []);
    const column = useMemo(() => [
        {
            Header: "#Purchase Order",
            accessor: "Purchase",
          },
          {
            Header: "Date Created",
            accessor: "dateCreated",
          },
          {
            Header: "Vendor Name",
            accessor: "VendorName",
          },
          {
            Header: "Expected Delivery Date",
            accessor: "deliveryDate",
          },
          {
            Header: "Purchase Order Amount",
            accessor: "purchaseOrder",
          },
          {
            Header: "Outstanding Balance",
            accessor: "OutstandingBalance",
          },
          {
            Header: "Status",
            accessor: "status",
          },
    
    ], [])
    return (
        <div>

        </div>
    )
 };

 export default Table;