import Head from "next/head";
import { AuthShowcase } from "~/components/auth.showcase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter App</title>
        <meta name="description" content="Next.js Starter App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthShowcase />
      </main>
    </>
  );
}
