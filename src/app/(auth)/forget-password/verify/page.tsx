"use client";
import React, { useEffect, useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import Input from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const ForgotPasswordPage: NextPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      code: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (code) {
      setValue("code", code);
    }
  }, [code]);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    router.push("/dashboard");
  }

  const onSubmit = async (data: any) => {
    console.log(data);

    if (!isLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code: data.code,
        password: data.password,
      });

      if (result.status === "complete") {
        setError("");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].longMessage);
    } finally {
      setIsLoading(false);
      router.push("/forget-password/verify");
    }
  };

  console.log(errors);

  return (
    <div className="grid h-screen  place-content-center  gap-4 grid-cols-1 lg:grid-cols-2">
      <div className=" bg-violet-900 h-screen hidden lg:flex"></div>
      <div className="p-5  rounded h-screen flex flex-col justify-center items-center ">
        <h1> Reset Password</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6 w-full lg:w-[70%]"
          >
            <>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password*
                </label>
                <div className=" relative">
                  <Input
                    type={view ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    errors={errors}
                    inputRef={register("password", { required: true })}
                    required={true}
                  />

                  <div
                    className=" absolute top-3 right-3 cursor-pointer"
                    onClick={() => setView(!view)}
                  >
                    {view ? (
                      <EyeIcon className="w-[20px] hover:text-violet-500 dark:text-[#111] dark:hover:hover:text-violet-500" />
                    ) : (
                      <EyeSlashIcon className="w-[20px] hover:text-violet-500 dark:text-[#111] dark:hover:hover:text-violet-500" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h1 className="capitalize  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  OTP*
                </h1>
                <InputOTP
                  maxLength={6}
                  className="focus:outline-none focus:border-violet-500 w-full"
                  value={code}
                  onChange={(value) => setCode(value)}
                >
                  <InputOTPGroup className="gap-5 w-full  grid-cols-3 lg:grid-cols-6 grid lg:flex focus:outline-none focus:border-violet-500">
                    {[...Array(6)].map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className=" w-full h-[73px]    focus:outline-none focus:border-violet-500"
                      ></InputOTPSlot>
                    ))}
                  </InputOTPGroup>
                </InputOTP>

                <p className="mt-3">
                  {" "}
                  Please enter the one-time password sent to your email
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? <p>Loading...</p> : <p>Reset</p>}
              </button>
              {error && <p className=" text-red-500 text-sm my-3">{error}</p>}
            </>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

const validationSchema = Yup.object().shape({
  code: Yup.string()
    .required("OTP code is required")
    .min(6, "OTP code must be exactly 6 digits")
    .max(6, "OTP code must be exactly 6 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
