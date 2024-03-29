"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuDropDown from "./MenuDropDown";
import {
  CloudIcon,
  SquaresPlusIcon,
  DocumentIcon,
  FolderIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div className=" bg-purple-300  dark:bg-purple-900 p-3 h-screen overflow-hidden sticky top-0   ">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="  flex items-center text-center m-auto   w-full mt-2">
            <Link
              href="/"
              className=" w-full mx-7  list-none text-center flex items-center text-2xl  uppercase font-bold"
            >
              <CloudIcon className=" lg:w-16 lg:h-16" />
              <li className="hidden lg:flex">Organizely</li>
            </Link>
          </div>
          <nav className=" my-10 ">
            <MenuDropDown />
            <ul className=" space-y-10">
              {NavLinks.map((link) => (
                <Link
                  key={link.id}
                  className={`${
                    isActive(link.path) &&
                    "dark:bg-purple-300 bg-purple-900 text-white dark:text-[#111]"
                  }  pl-5 font-medium flex hover:dark:bg-purple-300 hover:bg-purple-900 py-3 hover:text-white hover:dark:text-[#111] rounded-md items-center space-x-2 capitalize`}
                  href={link.path}
                >
                  <span className="w-7 h-7">{link.icon}</span>
                  <li className="hidden lg:flex">{link.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <div className="dark:bg-purple-300  space-x-1 m-auto flex items-center bg-purple-900 text-white dark:text-[#111] uppercase px-3 cursor-pointer font-bold rounded-md text-center">
            <CloudIcon className="w-16 h-16" />
            <h1 className="hidden lg:flex"> upgrade storage</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
const NavLinks = [
  {
    id: 1,
    name: "dashboard",
    path: "/dashboard",
    icon: <SquaresPlusIcon />,
  },
  {
    id: 2,
    name: "my folders",
    path: "/dashboard/folders",
    icon: <FolderIcon />,
  },
  {
    id: 3,
    name: "my files",
    path: "/dashboard/files",
    icon: <DocumentIcon />,
  },
  {
    id: 4,
    name: "favorite",
    path: "/dashboard/favorite",
    icon: <HeartIcon />,
  },
  {
    id: 5,
    name: "trash",
    path: "/dashboard/trash",
    icon: <TrashIcon />,
  },
];
