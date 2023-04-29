import Link from "next/link";
import type { Metadata } from "next";
import {
  ProseH1,
  ProseH3,
  ProseLead,
  ProseSmall,
} from "@components/Typography";
import { baseMetadata } from "@config/meta";
import { getPosts, blogDir } from "@lib/mdx";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blog",
  description: "From the blog",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blog",
    description: "From the blog",
    images: [`/api/og?title=${encodeURI("From the blog")}&path=blog`],
    url: `/blog`,
  },
};

export default async function Blog() {
  const posts = await getPosts(blogDir);

  return (
    <div className="py-12">
      <header>
        <ProseH1>From the blog</ProseH1>
        <ProseLead>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </ProseLead>
      </header>
      <section className="grid grid-cols-1 border-t gap-y-8 border-gray-500/20 py-10 my-10">
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
