"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/Tabs";
import { ProseSubtle } from "../Typography";
import { CopyButton } from "./CopyButton";
import { CodeIcon } from "./CodeIcon";
import { EyeIcon } from "./EyeIcon";
import { ReactNode } from "react";

export function Preview({
  title,
  code,
  srcCode,
  component,
}: {
  title: string;
  code: string;
  srcCode: string;
  component: ReactNode;
}) {
  return (
    <Tabs defaultValue="preview">
      <header className="flex justify-end items-center gap-3">
        <ProseSubtle className="mr-auto">{title}</ProseSubtle>
        <TabsList>
          <TabsTrigger value="preview">
            <EyeIcon className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
        <span className="h-4 hidden sm:block border-r border-slate-200 dark:border-slate-700" />
        <CopyButton code={srcCode} />
      </header>
      <TabsContent value="preview">
        <div className="grid h-[20rem] w-full place-content-center overflow-scroll rounded-md border border-slate-200 p-6 dark:border-slate-700">
          <div
            style={{
              all: "unset",
            }}
          >
            {component}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div
          className="h-[20rem] w-full overflow-scroll rounded-md border border-slate-200 dark:border-slate-700"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </TabsContent>
    </Tabs>
  );
}
