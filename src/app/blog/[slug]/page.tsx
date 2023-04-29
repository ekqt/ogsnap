import {
  ProseH1,
  ProseLead,
  ProseSmall,
  ProseSubtle,
} from "@components/Typography";
import { baseMetadata } from "@config/meta";
import { getPost, getPosts, blogDir } from "@lib/mdx";
import { type Metadata } from "next";
import Image from "next/image";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: BlogPostProps): Promise<Metadata> {
  const { frontmatter } = await getPost(blogDir, slug);
  return {
    ...baseMetadata,
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      ...baseMetadata.openGraph,
      title: frontmatter.title,
      description: frontmatter.description,
      images: [`/api/og?title=${encodeURI(frontmatter.title)}&path=blog&tags`],
      url: `/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(blogDir, slug);

  return (
    <div className="py-12 space-y-6">
      <header>
        <ProseSmall className="flex gap-2">
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          <span>·</span>
          <span className="space-x-1">
            <span>by</span>
            <span className="bg-gradient-to-r font-medium from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {frontmatter.author}
            </span>
          </span>
        </ProseSmall>
        <ProseH1 className="mt-2.5">{frontmatter.title}</ProseH1>
        <ProseLead>{frontmatter.description}</ProseLead>
      </header>
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={`/api/og?title=${encodeURI(frontmatter.title)}&path=blog&tags`}
          alt={frontmatter.title}
          width={1200}
          height={630}
          priority={true}
        />
        <div className="absolute bottom-0 h-1/3 w-full dark:bg-gradient-to-b dark:from-transparent dark:to-slate-800/50 shadow-lg" />
      </div>
      <article className="prose max-w-none lg:prose-xl">{content}</article>
      <footer className="mt-9 flex gap-3 border-t border-gray-500/50 pt-9">
        <Image
          width={50}
          height={50}
          alt={frontmatter.author}
          src={
            frontmatter?.github
              ? `http://avatars.githubusercontent.com/${frontmatter.github}`
              : "https://github.com/identicons/webscopeio.png"
          }
          className="overflow-hidden rounded-full"
        />
        <ProseSubtle className="grid gap-1">
          <span className="space-x-1">
            <span>Written by</span>
            <span className="bg-gradient-to-r font-medium from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {frontmatter.author}
            </span>
          </span>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </ProseSubtle>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts(blogDir);
  return posts.map(({ slug }) => ({ slug }));
}
