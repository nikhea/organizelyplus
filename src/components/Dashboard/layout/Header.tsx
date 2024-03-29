import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-purple-300 dark:bg-purple-900 rounded-bl-lg  rounded-br-lg      py-5 px-5 flex items-center justify-between sticky  top-0 overflow-hidden">
      <h1>Header</h1>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
