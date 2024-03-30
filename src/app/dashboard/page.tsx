import DashboardTable from "@/components/Dashboard/dashboardTable/dashboardTable";
import RecentFolders from "@/components/Dashboard/recentFolders/recentFolders";
import React from "react";

const page = () => {
  return (
    <div className=" px-3 py-5 flex flex-col gap-4 ">
      <RecentFolders />
      <DashboardTable />
    </div>
  );
};

export default page;
