/**
 * table show of artical summary
 * using material-react-table
 * input a [] data source
 * output a table with address

*/
import { Box } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";
import { MRT_ColumnDef } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { getArtical } from "../../api/apis";
const data: Artical[] = [
  {
    id: 1,
    title: "Brittany",
    keywords: "McCullough",
    content: "bmccullough44@mailinator.com",
    address: "Lincoln"
  }
];
import postUI from "./postUI";
export default function PostList() {
  return UI(data);
}

const UI = (data: Artical[]) => {
  const columns = useMemo<MRT_ColumnDef<Artical>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Title"
      },
      {
        accessorKey: "keywords",
        header: "Keywords"
      },
      {
        accessorKey: "content",
        header: "Content",
        size: 300
      }
    ],
    [] //????????????????????????? what is this for ?
  );
  const table = useMaterialReactTable({
    enableColumnOrdering: true,
    columns: columns,
    data: data,
    enableColumnResizing: true,
    layoutMode: "grid",
    //Disables the default flex-grow behavior of the table cells
    muiTableHeadCellProps: {
      sx: {
        flex: "0 0 auto"
      }
    },
    muiTableBodyCellProps: {
      sx: {
        flex: "0 0 auto"
      }
    },
    enableColumnActions: false,
    enableTopToolbar: true,
    enableGlobalFilter: true,
    positionGlobalFilter: "right", //show the global filter on the left side of the top toolbar
    initialState: {
      showGlobalFilter: true //show the global filter by default
    }
  });
  return (
    <div>
      <Box>
        <span>articals from pipe_know</span>
        <MaterialReactTable table={table} />
      </Box>
    </div>
  );
};

export type Artical = {
  id: number;
  title: string;
  keywords: string;
  content: string;
  address: string;
};
