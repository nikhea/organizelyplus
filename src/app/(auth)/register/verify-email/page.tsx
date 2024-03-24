"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
const VerifyEmail = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const router = useRouter();

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(code);
    if (code === "" || code.length !== 6) {
      toast("Please Enter The Compelete Code");
      return;
    }

    if (!isLoaded) {
      return;
    }
    setIsLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      const msg = err?.errors[0]?.longMessage;
      setErrMessage(msg);
    } finally {
      setIsLoading(false);
      router.push("/dashboard");
    }
  };

  return (
    <>
      <div className="grid h-screen  place-content-center  gap-4 grid-cols-1 lg:grid-cols-2">
        <div className=" bg-violet-900 h-screen hidden lg:flex"></div>

        <div className="p-5  rounded h-screen flex flex-col justify-center items-center ">
          <form className="space-y-4 md:space-y-6  flex flex-col justify-center items-center  w-full lg:w-[70%]">
            <h1 className=" font-bold capitalize text-xl">
              One-Time Password{" "}
            </h1>
            <InputOTP
              maxLength={6}
              value={code}
              onChange={(value) => setCode(value)}
              className="focus:outline-none focus:border-violet-500"
            >
              <InputOTPGroup className=" focus:outline-none focus:border-violet-500 gap-5 w-full  grid-cols-3 grid lg:flex">
                <InputOTPSlot
                  index={0}
                  className="w-[60px] h-[60px] space-x-10 focus:outline-none focus:border-violet-600"
                />
                <InputOTPSlot
                  index={1}
                  className="w-[60px] h-[60px] space-x-10 focus:outline-none focus:border-violet-600"
                />
                <InputOTPSlot
                  index={2}
                  className="w-[60px] h-[60px] space-x-10 focus:outline-none focus:border-violet-600"
                />
                <InputOTPSlot
                  index={3}
                  className="w-[60px] h-[60px] space-x-10 focus:outline-none focus:border-violet-600"
                />
                <InputOTPSlot
                  index={4}
                  className="w-[60px] h-[60px] space-x-10 focus:outline-none focus:border-violet-600"
                />
                <InputOTPSlot
                  index={5}
                  className="w-[60px]  h-[60px] space-x-10 focus:outline-none focus:border-violet-500"
                />
              </InputOTPGroup>
            </InputOTP>

            <p> Please enter the one-time password sent to your email .</p>
            <button
              type="submit"
              onClick={onPressVerify}
              className="w-full text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <p>Loading...</p> : <p>Verify Email</p>}
            </button>
          </form>
          <p className=" text-red-500 text-sm my-3">{errMessage}</p>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
{
  /* <input
value={code}
className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
placeholder="Enter Verification Code..."
onChange={(e) => setCode(e.target.value)}
required={true}
/> */
}
