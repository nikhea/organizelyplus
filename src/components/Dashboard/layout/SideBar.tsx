import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-purple-300  dark:bg-purple-900 p-3 h-screen overflow-hidden sticky top-0 ">
      <div className="h-full  w-full mt-2">
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
