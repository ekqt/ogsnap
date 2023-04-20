import { ProseH1, ProseLead, ProseSmall } from "@components/typography";
import { blogDir } from "@config/blog";
import { getPost, getPosts } from "@utils/mdx";
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
    metadataBase: new URL("https://mdx-blog-starter-mu.vercel.app/"),
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: [`/api/og?title=${encodeURI(frontmatter.title)}&path=blog&tags`],
      url: `https://mdx-blog-starter-mu.vercel.app/blog${slug}`,
      siteName: "MDX Blog Starter",
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(blogDir, slug);

  return (
    <div className="py-12 space-y-6">
      <header>
        <ProseSmall>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
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
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts(blogDir);
  return posts.map(({ slug }) => ({ slug }));
}
