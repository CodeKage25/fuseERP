import React, {useMemo} from 'react';
import {Data} from '../../helpers/data'
function Table() {
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

        const data = useMemo(() => data(), []);
        <div>

        </div>
    )
 };

 export default Table;