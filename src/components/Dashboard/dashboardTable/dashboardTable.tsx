"use client";
import { Card, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { DataTable } from "./tableDisplay";
import { columns, fileType } from "./columns";
import { useSearchParams } from "next/navigation";

const DashboardTable = () => {
  let params: any = {};

  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState<fileType[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const filtered = Files.filter(
      (item) =>
        item.fileName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.folderName.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredData(filtered);

    params["q"] = filterValue;
    const p = new URLSearchParams(params).toString();
  }, [filterValue]);

  return (
    <Card className="p-5 bg-slate-50 dark:bg-slate-900 pb-10">
      <CardTitle className="capitalize font-bold text-2xl mb-5">
        recent files
      </CardTitle>
      <DataTable
        columns={columns}
        data={filteredData} // Pass filteredData instead of allData
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </Card>
  );
};

export default DashboardTable;

const Files: fileType[] = [
  {
    id: "1",
    folderName: "secert",
    fileName: "sxz",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "pdf",
    size: 120353666635346,
  },
  {
    id: "2",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "png",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "jpg",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "svg",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "mp3",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "mp4",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "docx",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "pptx",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "gif",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "html",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "css",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "psd",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "sh",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "avi",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "m4v",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "woff",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "mkv",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "bat",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "srt",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "flv",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "odt",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "secert",
    fileName: "apx",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "wmv",
    size: 120353666635346,
  },
  {
    id: "1",
    folderName: "pxc",
    fileName: "ccv",
    fullName: "ax",
    timestamp: new Date(),
    lastModified: new Date(),
    downloadURL: "string",
    type: "yaml",
    size: 120353666635346,
  },
];
