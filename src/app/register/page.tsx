// @ts-nocheck

"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [isLoading, setIsLoading] = useState(false); // Corrected useState usage
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  // Form Submit
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!isLoaded) {
  //       return;
  //     }

  //     try {
  //       await signUp.create({
  //         firstName,
  //         lastName,
  //         emailAddress: email,
  //         password,
  //       });

  //       // send the email.
  //       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
  //       setIsLoading(false);

  //       setPendingVerification(true);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded || isLoading) {
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false); // Set loading state to false after sign-up process completes
    }
  };
  // Verify User Email Code
  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    setIsLoading(true); // Set loading state to true

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.log("uncomplete");

        // console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/dashboard");
      }
      console.log(completeSignUp.status);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setIsLoading(false); // Set loading state to false after sign-up process completes
    }
  };

  return (
    <div className="p-5 border rounded" style={{ width: "500px" }}>
      <h1 className="mb-4 text-2xl">Register</h1>
      {!pendingVerification && (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required={true}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isLoading ? <p>Loading...</p> : <p>Create an account</p>}
          </button>
        </form>
      )}
      {pendingVerification && (
        <div>
          <form className="space-y-4 md:space-y-6">
            <input
              value={code}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Verification Code..."
              onChange={(e) => setCode(e.target.value)}
              required={true}
            />
            <button
              type="submit"
              onClick={onPressVerify}
              className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <p>Loading...</p> : <p>Verify Email</p>}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
