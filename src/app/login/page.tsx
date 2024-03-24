"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import SignInWithGoogle from "../../components/Oauth/google";
import Input from "@/components/ui/input";

export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [view, setView] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
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
      const result = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
      const msg = err?.errors[0]?.longMessage;
      setErrMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid h-screen  place-content-center  gap-4 grid-cols-1 lg:grid-cols-2">
      <div className=" bg-violet-900 h-screen hidden lg:flex"></div>
      <div className="p-5  rounded h-screen flex flex-col justify-center items-center ">
        <SignInWithGoogle />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}             className="space-y-4 md:space-y-6 w-[70%]"
>
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
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password*
              </label>
              <div className=" relative">
                <Input
                  type={view ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="password"
                  errors={errors}
                  inputRef={register("password", { required: true })}
                  required={true}
                />

                <div
                  className=" absolute top-3 right-3 cursor-pointer"
                  onClick={() => setView(!view)}
                >
                  {view ? (
                    <EyeIcon className="w-[20px] hover:text-violet-500" />
                  ) : (
                    <EyeSlashIcon className="w-[20px] hover:text-violet-500" />
                  )}
                </div>
              </div>
              </div>
              <p className="text-violet-500 font-bold font-light font-light capitalize ">
              <Link href="/forget-password">
          forgotten password
          </Link>
        </p>
            <button
              type="submit"
              className="w-full text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <p>Loading...</p> : <p>Sign In</p>}
            </button>
          </form>
        </FormProvider>
        <p className=" my-3 font-light">
        Don’t have an account?<Link className=" text-violet-500 font-bold capitalize" href="/register">
            create account
          </Link> 
        </p>
      
        <p className=" text-red-500 text-sm my-3">{errMessage}</p>
      </div>
    </div>
  );
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});
