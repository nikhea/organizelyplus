import type { Metadata } from "next";
import Header from "@/components/Dashboard/layout/Header";
import SideBar from "@/components/Dashboard/layout/SideBar";

import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className=" grid grid-cols-6 gap-1 ">
        <SideBar />
        <div className="col-span-5 relative">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
