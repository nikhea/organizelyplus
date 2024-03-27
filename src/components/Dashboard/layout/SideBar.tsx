import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-slate-50 border-r dark:bg-gray-800 p-3 h-screen overflow-hidden sticky top-0 ">
      <div className="h-full bg-red-500 w-full mt-2">
        <Link
          href="/"
          className=" list-none text-center text-2xl  uppercase font-bold"
        >
          <li>Organizely</li>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
// border border-2
