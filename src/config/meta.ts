import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://ogsnap.vercel.app"),
  title: "OG Snap",
  description: "Build Engaging Images fast with Dynamic Image Generation",
  openGraph: {
    title: "OG Snap",
    description: "Build Engaging Images fast with Dynamic Image Generation",
    images: [
      `/api/og?title=${encodeURI(
        "Build Engaging Images fast with Dynamic Image Generation"
      )}`,
    ],
    url: "https://ogsnap.vercel.app",
    siteName: "OG Snap",
    locale: "en-US",
    type: "website",
  },
};
