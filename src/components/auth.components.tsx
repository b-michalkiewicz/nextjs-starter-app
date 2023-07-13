"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const buttonClasses =
  "rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20";

export function SignIn() {
  return (
    <button className={buttonClasses} onClick={() => void signIn()}>
      {"Sign in"}
    </button>
  );
}

export function SignOut() {
  return (
    <button className={buttonClasses} onClick={() => void signOut()}>
      {"Sign out"}
    </button>
  );
}

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <p className="text-center text-2xl text-white">{session?.user.name}</p>
    </>
  );
};
