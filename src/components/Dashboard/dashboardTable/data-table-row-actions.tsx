"use client";

// import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { labels } from "../data/data";
// import { taskSchema } from "../data/schema";
import { Button } from "@/components/ui/button";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  //   const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          //   variant="ghost"
          className="flex rounded-lg h-8 w-8 p-0 data-[state=open]:bg-muted border-0 ring-none border-none active:ring-none focus:ring-none active:ring-none focus:ring-none  ring-0 active:ring-0 focus:ring-0 active:ring-none focus:ring-none"
        >
          <EllipsisHorizontalIcon className="w-7 h-7 cursor-pointer" />
          <span className="sr-only">Open menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] cursor-pointer">
        <DropdownMenuItem className=" cursor-pointer">Edit</DropdownMenuItem>
        {/* <DropdownMenuItem>Make a copy</DropdownMenuItem> */}
        <DropdownMenuItem className=" cursor-pointer">
          Favorite
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500 cursor-pointer hover:text-red-500 hover:!bg-red-200">
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
