import { getServerAuthSession } from "~/server/auth";
import { SignIn, SignOut, User } from "./auth.components";

export async function AuthShowcase() {
  const session = await getServerAuthSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {session && <span>Server session name: {session.user?.name}</span>}
      </p>
      <User />
      {session ? <SignOut /> : <SignIn />}
    </div>
  );
}
