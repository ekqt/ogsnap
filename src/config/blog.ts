import { MDXRemoteProps } from "next-mdx-remote";
import {
  ProseAnchor,
  ProseBlockquote,
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseInlineCode,
  ProseP,
  ProseStrong,
  ProseUL,
} from "@components/typography";
import { z } from "zod";

// ⬇️ Constants

export const blogDir = "src/content";
export const fileExtension = ".mdx";

// ⬇️ Schemas and Type Definitions

export const frontmatterSchema = z.object(
  {
    title: z.string({
      required_error: "Title is required",
    }),
    date: z.string({
      required_error: "Date is required",
    }),
    description: z.string({
      required_error: "Description is required",
    }),
  },
  {
    required_error: "Post not found",
  }
);

export type FrontMatter = z.infer<typeof frontmatterSchema>;

export const metaSchema = frontmatterSchema.extend({
  id: z.string(),
  slug: z.string(),
});

export type PostMeta = z.infer<typeof metaSchema>;

// ⬇️ Component mappings

export const components = {
  h1: ProseH1,
  h2: ProseH2,
  h3: ProseH3,
  h4: ProseH4,
  p: ProseP,
  a: ProseAnchor,
  strong: ProseStrong,
  blockquote: ProseBlockquote,
  ul: ProseUL,
  code: ProseInlineCode,
} as MDXRemoteProps["components"];
