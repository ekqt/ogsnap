import {
  ProseH1,
  ProseH3,
  ProseLead,
  ProseSmall,
} from "@components/typography";
import { blogDir } from "@config/blog";
import { getPosts } from "@utils/mdx";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://mdx-blog-starter-mu.vercel.app/"),
  title: "Blog",
  description: "Learn how to build applications with React and Next 13",
  openGraph: {
    title: "Blog",
    description: "Learn how to build applications with React and Next 13",
    url: `/api/og?title=${encodeURI("From the Blog")}&path=blog`,
    siteName: "MailingUI",
    locale: "en-US",
    type: "website",
  },
};

export default async function Blog() {
  const posts = await getPosts(blogDir);

  return (
    <div className="py-12">
      <header>
        <ProseH1>From the blog</ProseH1>
        <ProseLead>
          Learn how to build applications with React and Next 13
        </ProseLead>
      </header>
      <section className="grid lg:grid-cols-2 grid-cols-1 border-t gap-x-4 gap-y-8 border-gray-500/20 py-10 my-10">
        {posts.map((post) => (
          <article
            key={post.id}
            className="grid place-content-start group relative space-y-2"
          >
            <ProseSmall>
              <time dateTime={post.date}>{post.date}</time>
            </ProseSmall>
            <ProseH3>
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </ProseH3>
            <ProseSmall className="line-clamp-2">{post.description}</ProseSmall>
          </article>
        ))}
      </section>
    </div>
  );
}
