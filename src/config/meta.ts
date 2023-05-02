import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://opengraphui.vercel.app"),
  title: "OpenGraph UI",
  description: "Build engaging Open Graph images faster",
  icons: {
    icon: [
      {
        url: "/favicon-32.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon-512.png",
    shortcut: "/favicon-512.png",
  },
  openGraph: {
    title: "OpenGraph UI",
    description: "Build engaging Open Graph images faster",
    images: [
      `/api/og?title=${encodeURI("Build engaging Open Graph images faster")}`,
    ],
    url: "https://opengraphui.vercel.app",
    siteName: "OpenGraph UI",
    locale: "en-US",
    type: "website",
  },
};
