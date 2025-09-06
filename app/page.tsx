"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

export default function Home() {
  const { signIn, signOut } = useAuthActions();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Unauthenticated>
        <h1>Google Sign In</h1>
        <button type="button" onClick={() => void signIn("google")}>
          sign in with google
        </button>
      </Unauthenticated>
      <Authenticated>
        <button type="button" onClick={() => void signOut()}>
          you're authenticated. now sign out
        </button>
      </Authenticated>
    </div>
  );
}
