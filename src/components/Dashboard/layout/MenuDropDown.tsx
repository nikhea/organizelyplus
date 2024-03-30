import {
  DocumentPlusIcon,
  FolderPlusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NewFolder } from "@/components/folder/newFolder";

const MenuDropDown = () => {
  return (
    <div className="w-full mb-5 ml-5">
      <DropdownMenu>
        <DropdownMenuTrigger className="dark:bg-purple-300 bg-purple-900 lg:w-[30%] capitalize flex items-center justify-between rounded-xl  p-3  text-white dark:text-[#111]">
          <PlusIcon className="w-7 h-7" />
          <h1 className="hidden lg:flex">new</h1>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="capitalize cursor-pointer">
            <FolderPlusIcon className="w-5 h-5 mr-1" />
            new folder
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="capitalize cursor-pointer"
            onClick={() => alert("new file")}
          >
            <DocumentPlusIcon className="w-5 h-5 mr-1" /> new file
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
      <NewFolder />
    </div>
  );
};

export default MenuDropDown;
