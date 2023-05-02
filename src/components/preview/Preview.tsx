"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/Tabs";
import { ProseSubtle } from "../Typography";
import { CopyButton } from "./CopyButton";
import { CodeIcon } from "./CodeIcon";
import { EyeIcon } from "./EyeIcon";
import { ReactNode } from "react";
import { Resizable } from "re-resizable";

export function Preview({
  name,
  code,
  srcCode,
  preview,
  isRezisable = true,
}: {
  name: string;
  code: string;
  srcCode: string;
  preview: ReactNode;
  isRezisable?: boolean;
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
        <Resizable
          bounds="parent"
          minWidth="320px"
          maxWidth="100%"
          enable={isRezisable ? { right: true } : {}}
          handleStyles={{
            right: {
              right: "initial",
              left: "100%",
              paddingLeft: "0.25rem",
              paddingRight: "0.25rem",
              width: "auto",
              cursor: "ew-resize",
            },
          }}
          handleClasses={{
            right: "hidden sm:flex items-center",
          }}
          handleComponent={{
            right: <div className="h-8 w-1.5 rounded-full bg-slate-400" />,
          }}
        >
          <div className="w-full grid grid-cols-1 overflow-scroll rounded-md border border-slate-200 p-9 dark:border-slate-700">
            <div
              style={{
                all: "unset",
              }}
            >
              {preview}
            </div>
          </div>
        </Resizable>
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
