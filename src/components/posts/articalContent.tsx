/**
 * table show of artical summary
 * using material-react-table
 * input a [] data source
 * output a table with address

*/

import { Box } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { getArtical } from "../../api/apis";
const data: ArticalList[] = [];
export default function PostList() {
  const [articals, setArtical] = useState([]);
  const columns = useMemo<MRT_ColumnDef<ArticalList>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Title"
      },
      {
        accessorKey: "keywords",
        header: "Last Name"
      },
      {
        accessorKey: "address",
        header: "from Address",
        size: 300
      }
    ],
    []
  );

  useEffect(() => {
    const res = getArtical(1);
    setArtical(res);
  }, []);
  return (
    <div>
      <Box>
        <span>xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
        <MaterialReactTable
          enableColumnOrdering
          columns={columns}
          data={data}
          enableColumnResizing
          layoutMode="grid"
          //Disables the default flex-grow behavior of the table cells
          muiTableHeadCellProps={{
            sx: {
              flex: "0 0 auto"
            }
          }}
          muiTableBodyCellProps={{
            sx: {
              flex: "0 0 auto"
            }
          }}
          enableColumnActions={false}
          enableTopToolbar={true}
        />
      </Box>
    </div>
  );
}

type ArticalList = {
  title: string;
  keywords: string;
  address: string;
};
