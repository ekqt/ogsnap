"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/Tabs";
import { ProseSubtle } from "../Typography";
import { CopyButton } from "./CopyButton";
import { CodeIcon } from "./CodeIcon";
import { EyeIcon } from "./EyeIcon";
import { ReactNode } from "react";

export function Preview({
  name,
  code,
  srcCode,
  preview,
}: {
  name: string;
  code: string;
  srcCode: string;
  preview: ReactNode;
}) {
  return (
    <Tabs defaultValue="preview">
      <header className="flex justify-end items-center gap-3">
        <ProseSubtle className="mr-auto">{name}</ProseSubtle>
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
        <div className="w-full grid grid-cols-1 overflow-scroll rounded-md border border-slate-200 p-9 dark:border-slate-700">
          <div
            style={{
              all: "unset",
            }}
          >
            {preview}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div
          className="w-full overflow-scroll rounded-md border border-slate-200 dark:border-slate-700"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </TabsContent>
    </Tabs>
  );
}
