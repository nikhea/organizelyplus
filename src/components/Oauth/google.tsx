import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";

function SignInWithGoogle() {
  const { signIn } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/dashboard",
    });
  };

  return (
    <div>
      <button onClick={() => signInWith("oauth_google")}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignInWithGoogle;
