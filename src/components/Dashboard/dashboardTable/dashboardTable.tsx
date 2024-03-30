"use client";
import { Card, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { DataTable } from "./tableDisplay";
import { columns, fileType } from "./columns";

const DashboardTable = () => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState<fileType[]>([]);

  useEffect(() => {
    const filtered = Files.filter(
      (item) =>
        item.fileName.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.folderName.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredData(filtered);
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
    type: "string/pdf",
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
    type: "string/png",
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
    type: "string/jpg",
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
    type: "string/svg",
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
    type: "string/mp3",
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
    type: "string/mp4",
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
    type: "string/docx",
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
    type: "string/pptx",
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
    type: "string/gif",
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
    type: "string/html",
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
    type: "string/css",
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
    type: "string/psd",
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
    type: "string/sh",
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
    type: "string/avi",
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
    type: "string/m4v",
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
    type: "string/woff",
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
    type: "string/mkv",
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
    type: "string/bat",
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
    type: "string/srt",
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
    type: "string/flv",
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
    type: "string/odt",
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
    type: "string/wmv",
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
    type: "string/yaml",
    size: 120353666635346,
  },
];
