"use client";
import React, { useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const ForgotPasswordPage: NextPage = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    router.push("/dashboard");
  }

  async function reset(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        if (result.status === "needs_second_factor") {
          setError("");
        } else if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          setError("");
        } else {
          console.log(result);
        }
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
      <h1> Reset Password</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
        onSubmit={reset}
      >
        <>
          <label htmlFor="password">Enter your new password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="password">
            Enter the password reset code that was sent to your email
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button>Reset</button>
          {error && <p>{error}</p>}
        </>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
