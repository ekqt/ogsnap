import "./globals.css";
import { Inter } from "next/font/google";
import { Blob } from "@components/blob";
import { Navbar } from "@components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-slate-800 text-slate-800 dark:text-white transition-colors`}
      >
        <Navbar />
        <main className="mx-auto max-w-3xl p-6 2xl:max-w-4xl min-h-screen relative">
          <Blob />
          {children}
        </main>
      </body>
    </html>
  );
}
