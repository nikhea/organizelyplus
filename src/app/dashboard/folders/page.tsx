import TabsComponents from "@/components/TabsComponents/TabsComponents";
import dynamic from "next/dynamic";
// import FolderGrid from "@/components/folder/FolderGrid/FolderGrid";
import React from "react";
const FolderGrid = dynamic(
  () => import("@/components/folder/FolderGrid/FolderGrid")
);

const page = () => {
  return (
    <div className=" px-3 py-5  ">
      <TabsComponents grid={<FolderGrid />} table={"table"} />
    </div>
  );
};

export default page;
