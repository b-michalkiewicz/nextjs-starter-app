"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignIn() {
  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={() => void signIn()}
    >
      {"Sign in"}
    </button>
  );
}

export function SignOut() {
  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      onClick={() => void signOut()}
    >
      {"Sign out"}
    </button>
  );
}

export const User = () => {
  const { data: session } = useSession();

  if (!session) return;

  return (
    <>
      <p className="text-center text-2xl">
        Client session name: {session?.user.name}
      </p>
    </>
  );
};
