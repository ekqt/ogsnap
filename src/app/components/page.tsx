import { components } from "src/library/components";
import { Preview } from "@components/preview/Preview";
import {
  ProseH1,
  ProseH3,
  ProseLead,
  ProseSmall,
} from "@components/Typography";
import { baseMetadata } from "@config/meta";
import { getHighlighter, getCode, highlight } from "@lib/shiki";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Components",
  description: "Explore our components",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Components",
    description: "Explore our components",
    images: [
      `/api/og?title=${encodeURI("Explore our components")}&path=components`,
    ],
    url: `/components`,
  },
};

export default async function Components() {
  const components = await getComponents();

  return (
    <div className="py-12">
      <header>
        <ProseH1>Explore our components</ProseH1>
        <ProseLead>Build engaging Open Graph images fast</ProseLead>
      </header>
      <section className="grid grid-cols-1 border-t gap-y-8 border-gray-500/20 py-10 my-10">
        {components.map(({ name, description, componentPreviews }, index) => (
          <article key={index} className="grid grid-cols-1 space-y-2">
            <ProseH3 className="mt-0">{name}</ProseH3>
            <ProseSmall className="line-clamp-2">{description}</ProseSmall>
            <div className="grid grid-cols-1 space-y-6 h-fit">
              {componentPreviews.map(
                ({ name, code, srcCode, preview }, index) => (
                  <Preview
                    key={index}
                    name={name}
                    code={code}
                    srcCode={srcCode}
                    preview={preview}
                  />
                )
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

async function getComponents() {
  const highlighter = await getHighlighter();

  return await Promise.all(
    components.map(async (type) => ({
      ...type,
      componentPreviews: await Promise.all(
        type.componentPreviews.map(async (component) => {
          const srcCode = getCode(component.filename);
          const code = await highlight(highlighter, srcCode);
          return {
            ...component,
            code,
            srcCode,
          };
        })
      ),
    }))
  );
}
