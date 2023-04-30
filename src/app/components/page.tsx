import { components } from "src/library/components";
import { Preview } from "@components/preview/Preview";
import {
  ProseH1,
  ProseH3,
  ProseLead,
  ProseSmall,
} from "@components/Typography";
import { baseMetadata } from "@config/meta";
import { highlight } from "@lib/shiki";
import { readFileSync } from "fs";
import type { Metadata } from "next";
import { join } from "path";
import { ReactNode } from "react";

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
  return (
    <div className="py-12">
      <header>
        <ProseH1>Explore our components</ProseH1>
        <ProseLead>Build engaging images fast with our components</ProseLead>
      </header>
      <section className="grid grid-cols-1 border-t gap-y-8 border-gray-500/20 py-10 my-10">
        {components.map((type, index) => (
          <article key={index} className="grid grid-cols-1 space-y-2">
            <ProseH3 className="mt-0">{type.name}</ProseH3>
            <ProseSmall className="line-clamp-2">{type.description}</ProseSmall>
            <div className="grid grid-cols-1 space-y-6">
              {type.previews.map((c, index) => (
                /* @ts-expect-error Server Component */
                <PreviewContainer
                  key={index}
                  name={c.name}
                  filename={c.filename}
                  component={c.component}
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

async function PreviewContainer({
  name,
  filename,
  component,
}: {
  name: string;
  filename: string;
  component: ReactNode;
}) {
  const srcCode = readFileSync(
    join("./src/library/components", filename),
    "utf8"
  );

  const code = await highlight(srcCode, {
    lang: "tsx",
    theme: "github-dark",
    showLineNumbers: true,
  });

  return (
    <Preview title={name} code={code} srcCode={srcCode} component={component} />
  );
}
