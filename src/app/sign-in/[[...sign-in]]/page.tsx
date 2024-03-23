import React from "react";
import { SignIn } from "@clerk/nextjs";
const register = () => {
  return (
    <div className=" grid grid-cols-2 h-screen gap-4">
      <div className=" bg-black"></div>
      <div className=" w-[90%] flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
};

export default register;
