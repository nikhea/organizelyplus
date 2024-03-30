import { NewFolder } from "@/components/folder/newFolder";
import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FolderIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface IFolder {
  _id: string | number;
  name: string;
  totalfiles: number;
  size: number;
  color: string;
}

const RecentFolders = () => {
  const color = "blue";
  const folder = folders.map((folder: IFolder, index: number) => (
    <Card key={index} className="p-3 ">
      <div className="flex items-center justify-between">
        <FolderIcon
          className={`w-7 h-7 ${
            folder.color === "red"
              ? "text-red-500 dark:text-red-900"
              : folder.color === "blue"
              ? "text-blue-500 dark:text-blue-900"
              : folder.color === "yellow"
              ? "text-yellow-500 dark:text-yellow-900"
              : folder.color === "green"
              ? "text-green-500 dark:text-green-900"
              : ""
          }`}
        />
        <EllipsisVerticalIcon className="w-7 h-7 cursor-pointer" />
      </div>
      <h1
        className={`capitalize font-bold text-lg my-2 ${
          folder.color === "red"
            ? "text-red-500 dark:text-red-900"
            : folder.color === "blue"
            ? "text-blue-500 dark:text-blue-900"
            : folder.color === "yellow"
            ? "text-yellow-500 dark:text-yellow-900"
            : folder.color === "green"
            ? "text-green-500 dark:text-green-900"
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
  ));
  return (
    <Card className="p-5 bg-slate-50 dark:bg-slate-900 pb-10">
      <div className="flex items-center justify-between">
        <CardTitle className="capitalize font-bold text-2xl">
          recent folders
        </CardTitle>
        <CardDescription className="flex lg:hidden">
          <NewFolder />
        </CardDescription>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        {folder}
        <div className="lg:flex hidden">
          <NewFolder />
        </div>
      </div>
    </Card>
  );
};

export default RecentFolders;
const folders: IFolder[] = [
  {
    _id: 2,
    name: "documents",
    totalfiles: 500,
    size: 109,
    color: "blue",
  },
  {
    _id: 3,
    name: "personal details",
    totalfiles: 200,
    size: 109,
    color: "yellow",
  },
  {
    _id: 4,
    name: "images",
    totalfiles: 100,
    size: 109,
    color: "green",
  },
  {
    _id: 1,
    name: "pdf files",
    totalfiles: 20,
    size: 109,
    color: "red",
  },
  {
    _id: 5,
    name: "personal details",
    totalfiles: 200,
    size: 109,
    color: "green",
  },
  //   {
  //     _id: 3,
  //     name: "personal details",
  //     totalfiles: 200,
  //     size: 109,
  //     color: "yellow",
  //   },
];
