"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { auth, useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;

  return (
    <div className="  bg-purple-300 dark:bg-purple-900  py-5">
      <div className=" w-[80%] m-auto flex justify-between items-center">
        <Link href="/" className=" list-none capitalize font-bold">
          <li>Organizely</li>
        </Link>
        <ul className=" capitalize gap-4 flex  items-center">
          <ModeToggle />
          {!isAuth ? (
            <>
              <Link href="/register">
                <li>register</li>
              </Link>
              <Link href="/login">
                <li>login</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className=" list-none">
                <li>dashboard</li>
              </Link>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// attley.sun@farmoaks.com
// {!isAuth ? (
//   <>
//     <Link href="/register">
//       <li>register</li>
//     </Link>
//     <Link href="/login">
//       <li>login</li>
//     </Link>
//   </>
// ) : (
//   <li>
//     <UserButton afterSignOutUrl="/" />
//   </li>
// )}

// {!isAuth && (
//   <>
//     <Link href="/register">
//       <li>register</li>
//     </Link>
//     <Link href="/login">
//       <li>login</li>
//     </Link>
//   </>
// )}
// <li>
//   <UserButton afterSignOutUrl="/" />
// </li>
