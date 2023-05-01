import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://ogsnap.vercel.app"),
  title: "OpenGraph UI",
  description: "Build Engaging Open Graph Images Fast",
  openGraph: {
    title: "OpenGraph UI",
    description: "Build Engaging Open Graph Images Fast",
    images: [
      `/api/og?title=${encodeURI("Build Engaging Open Graph Images Fast")}`,
    ],
    url: "https://ogsnap.vercel.app",
    siteName: "OpenGraph UI",
    locale: "en-US",
    type: "website",
  },
};
