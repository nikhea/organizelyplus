"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/ui/input";
import SignInWithGoogle from "../../../components/Oauth/google";

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [view, setView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: any) => {
    if (!isLoaded || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      await signUp.create({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.email,
        password: data.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      router.push(`register/verify-email`);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid h-screen  place-content-center  gap-4 grid-cols-1 lg:grid-cols-2">
      <div className=" bg-violet-900 h-screen hidden lg:flex"></div>

      <div className="p-5  rounded h-screen flex flex-col justify-center items-center ">
        <h1 className="mb-4 text-2xl uppercase font-bold">Register</h1>
        <SignInWithGoogle />

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6 w-[70%]"
          >
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name*
              </label>
              <Input
                type="text"
                name="firstName*"
                placeholder="First Name"
                errors={errors}
                inputRef={register("firstName", { required: true })}
                id="first_name"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
              >
                Last Name*
              </label>
              <Input
                type="text"
                name="lastName*"
                placeholder="Last Name"
                errors={errors}
                inputRef={register("lastName", { required: true })}
                id="last_name"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address*
              </label>
              <Input
                type="email"
                name="email*"
                placeholder="Name@company.com"
                errors={errors}
                inputRef={register("email", { required: true })}
                id="email"
                required={true}
              />
            </div>
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
            <button
              type="submit"
              className="w-full text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <p>Loading...</p> : <p>Create an account</p>}
            </button>
          </form>
        </FormProvider>

        <p className=" my-3 font-light">
          Already have an account?
          <Link className=" text-violet-500 font-bold" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
