import { ProseH1, ProseLead, ProseSmall } from "@components/typography";
import { blogDir } from "@config/blog";
import { getPost, getPosts } from "@utils/mdx";
import { type Metadata } from "next";

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
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      siteName: "MailingUI",
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
      <article className="prose max-w-none lg:prose-xl">{content}</article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts(blogDir);
  return posts.map(({ slug }) => ({ slug }));
}
