import { FolderIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";
import { FC } from "react";
import { FolderAction } from "./FolderAction";

export interface IFolder {
  _id: string | number;
  name: string;
  totalfiles: number;
  size: number;
  color: string;
}
interface FolderCardProps {
  folder: IFolder;
}

const FolderCard: FC<FolderCardProps> = ({ folder }) => {
  return (
    <Card className="p-3 ">
      <div className="flex items-center justify-between">
        <FolderIcon
          className={`w-7 h-7 ${
            folder.color === "red"
              ? "dark:text-red-300 text-red-900"
              : folder.color === "blue"
              ? "dark:text-blue-300 text-blue-900"
              : folder.color === "yellow"
              ? "dark:text-yellow-300 text-yellow-900"
              : folder.color === "green"
              ? "dark:text-green-300 text-green-900"
              : ""
          }`}
        />
        <FolderAction />
      </div>
      <h1
        className={`capitalize font-bold text-lg my-2 ${
          folder.color === "red"
            ? "dark:text-red-300 text-red-900"
            : folder.color === "blue"
            ? "dark:text-blue-300 text-blue-900"
            : folder.color === "yellow"
            ? "dark:text-yellow-300 text-yellow-900"
            : folder.color === "green"
            ? "dark:text-green-300 text-green-900"
            : ""
        }`}
      >
        {folder.name}
      </h1>
      <div className="flex items-center justify-between ">
        <h6 className=" capitalize">{folder.totalfiles} files</h6>
        <h6 className=" uppercase">{folder.size} mb</h6>
      </div>
    </Card>
  );
};

export default FolderCard;
