import {
  ProseH1,
  ProseH3,
  ProseLead,
  ProseSmall,
} from "@components/typography";
import { baseMetadata } from "@config/meta";
import { getPosts, blogDir } from "@lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Templates",
  description: "Explore our templates",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Templates",
    description: "Explore our templates",
    images: [
      `/api/og?title=${encodeURI("Explore our templates")}&path=templates`,
    ],
    url: `/templates`,
  },
};

export default async function Blog() {
  const posts = await getPosts(blogDir);

  return (
    <div className="py-12">
      <header>
        <ProseH1>Explore our templates</ProseH1>
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
            <ProseH3>Template</ProseH3>
            <ProseSmall className="line-clamp-2">{post.description}</ProseSmall>
          </article>
        ))}
      </section>
    </div>
  );
}
