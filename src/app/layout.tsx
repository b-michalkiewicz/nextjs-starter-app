import "~/styles/globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "Next.js Starter App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
