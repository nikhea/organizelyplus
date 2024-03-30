"use client";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { UserButton, useUser } from "@clerk/nextjs";

import React from "react";

const Header = () => {
  const { user } = useUser();
  return (
    <div className=" bg-purple-300 dark:bg-purple-900   rounded-br-lg      py-5 px-5 flex items-center justify-between  sticky  top-0 overflow-hidden">
      <h1 className=" font-bold  md:text-2xl">
        Welcome back{" "}
        <span className=" !capitalize">
          {user?.fullName || user?.firstName}
        </span>
      </h1>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
