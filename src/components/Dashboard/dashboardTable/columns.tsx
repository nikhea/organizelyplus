"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";
import { COLOR_EXTENSION_MAP } from "@/lib/constants/fileType";
import { format } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "./columnHeader";

export type fileType = {
  id: string;
  folderName: string;
  fileName: string;
  fullName: string;
  timestamp: Date;
  lastModified: Date;
  downloadURL: string;
  type: string;
  size: string | number;
};

export const columns: ColumnDef<fileType>[] = [
  {
    accessorKey: "type",
    header: "",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            labelColor={COLOR_EXTENSION_MAP[extension]}
            extension={extension}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "folderName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Folder Name" />
    ),
    // header: "Folder Name",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       className="group"
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Folder Name
    //       <ArrowUpDown className="  ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
  },
  {
    accessorKey: "fileName",
    // header: "File Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="File Name" />
    ),
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       className="group"
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       File Name
    //       <ArrowUpDown className="  ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
  },
  {
    accessorKey: "timestamp",
    // header: "Date Added",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Added" />
    ),
    cell: ({ renderValue, ...props }) => {
      const timestamp = renderValue() as Date;
      return <span>{format(timestamp, "MMM dd, yyyy HH:mm:ss")}</span>; // Format the timestamp as desired
    },
  },
  {
    accessorKey: "lastModified",
    // header: "Last Modified",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Modified" />
    ),
    cell: ({ renderValue, ...props }) => {
      const lastModified = renderValue() as Date;
      return <span>{format(lastModified, "MMM dd, yyyy HH:mm:ss")}</span>; // Format the lastModified date as desired
    },
  },
  {
    accessorKey: "size",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Size" />
    ),
    // header: "size",

    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => (
      <Link
        href={renderValue() as string}
        target="_blank"
        className=" underline text-violet-500 hover:text-violet-700"
      >
        Download
      </Link>
    ),
  },
];
