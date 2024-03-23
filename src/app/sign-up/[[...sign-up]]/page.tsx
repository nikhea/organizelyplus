import React from "react";
import { SignUp, useSignUp } from "@clerk/nextjs";
const register = () => {
  return (
    <div className=" grid grid-cols-2 h-screen gap-4">
      <div className=" bg-black"></div>
      <div className=" w-[90%] flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
};

export default register;
