import { NewFolder } from "@/components/folder/newFolder";
import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import FolderCard, { IFolder } from "@/components/folder/FolderCard";

const RecentFolders = () => {
  const folder = folders.map((folder: IFolder, index: number) => (
    <FolderCard key={index} folder={folder} />
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
        <div className="lg:flex hidden">
          <NewFolder />
        </div>
        {folder}
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
];
