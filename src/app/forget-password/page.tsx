"use client";
import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/ui/input";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn } = useSignIn();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    router.push("/dashboard");
  }

  const onSubmit = async (data: any) => {
    if (!isLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await signIn?.create({
        strategy: "reset_password_email_code",
        identifier: data.email,
      });

      if (result.status === "complete") {
        setError("");
        router.push("/forget-password/verify");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      setError(err.errors[0].longMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid h-screen  place-content-center  gap-4 grid-cols-1 lg:grid-cols-2">
      <div className=" bg-violet-900 h-screen hidden lg:flex"></div>
      <div className="p-5  rounded h-screen flex flex-col justify-center items-center ">
        <h1>Forgot Password?</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6 w-[70%]"
          >
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email Address*
                </label>
                <Input
                  type="email"
                  name="email*"
                  placeholder="name@company.com"
                  errors={errors}
                  inputRef={register("email", { required: true })}
                  id="email"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>Send password reset code</p>
                )}
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
  email: Yup.string().email("Invalid email").required("Email is required"),
});
