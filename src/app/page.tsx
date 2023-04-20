import { Button } from "@components/button";
import { ProseH1, ProseLead } from "@components/typography";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://mdx-blog-starter-mu.vercel.app/"),
  title: "MDX Blog Starter",
  description: "Generated for MDX React RSC Next 13 and TailwindCSS",
  openGraph: {
    title: "MDX Blog Starter",
    description: "Generated for MDX React RSC Next 13 and TailwindCSS",
    images: [
      `/api/og?title=${encodeURI("Build a Blog Powered by Server Components")}`,
    ],
    url: "https://mdx-blog-starter-mu.vercel.app/",
    siteName: "MDX Blog Starter",
    locale: "en-US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="py-40 grid place-content-center text-center gap-2">
      <ProseH1>Build a Blog Powered by Server Components</ProseH1>
      <ProseLead>
        Create a Lightning-Fast and Scalable Blog using React Server Components
        and Next 13
      </ProseLead>
      <div className="py-4 flex md:flex-row flex-col items-center justify-center gap-2">
        <Link href="https://github.com/ekqt/mdx-blog-starter">
          <Button>Visit GitHub</Button>
        </Link>
        <Link href="/blog">
          <Button variant="link">
            Go to Blog <span aria-hidden="true">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
