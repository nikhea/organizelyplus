"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { RemoveDialog } from "../Dashboard/dashboardTable/removeDialog";
import { EditFolder } from "./editFolder";
import { useRouter } from "next/navigation";

export function FolderAction({}) {
  const router = useRouter();
  const [isconfirmOpen, setIsConfirmOpen] = useState(false);
  const [closeDialog, setCloseDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex rounded-lg h-8 w-8 p-0 data-[state=open]:bg-muted border-0 ring-none border-none active:ring-none focus:ring-none active:ring-none focus:ring-none  ring-0 active:ring-0 focus:ring-0 active:ring-none focus:ring-none">
            <EllipsisVerticalIcon className="w-7 h-7 cursor-pointer" />
            <span className="sr-only">Open menu</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px] cursor-pointer">
          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => router.push("/")}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => setCloseDialog(true)}
          >
            Edit{" "}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setIsConfirmOpen(true)}
            className="text-red-500 cursor-pointer hover:text-red-500 hover:!bg-red-200"
          >
            Remove
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <RemoveDialog
        isconfirmOpen={isconfirmOpen}
        setIsConfirmOpen={setIsConfirmOpen}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your
        account and remove your data from our servers."
      />
      <EditFolder closeDialog={closeDialog} setCloseDialog={setCloseDialog} />
    </>
  );
}
