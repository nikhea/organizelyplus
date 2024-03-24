"use client";
import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const ForgotPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    router.push("/dashboard");
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then((_) => {
        setError("");
        router.push("/forget-password/verify");
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }

  return (
    <div
      style={{
        margin: "auto",
        maxWidth: "500px",
      }}
    >
      <h1>Forgot Password?</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
        onSubmit={create}
      >
        <>
          <label htmlFor="email">Please provide your email address</label>
          <input
            type="email"
            placeholder="e.g john@doe.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button>Send password reset code</button>
          {error && <p>{error}</p>}
        </>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
// {successfulCreation && (
//   <>
//     <label htmlFor="password">Enter your new password</label>
//     <input
//       type="password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />

//     <label htmlFor="password">
//       Enter the password reset code that was sent to your email
//     </label>
//     <input
//       type="text"
//       value={code}
//       onChange={(e) => setCode(e.target.value)}
//     />

//     <button>Reset</button>
//     {error && <p>{error}</p>}
//   </>
// )}

// {secondFactor && (
//   <p>2FA is required, but this UI does not handle that</p>
// )}
