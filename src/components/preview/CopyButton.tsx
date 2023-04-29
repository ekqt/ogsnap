"use client";

import { useClipboard } from "@hooks/useClipboard";
import { CopyIcon } from "./CopyIcon";
import { SuccessIcon } from "./SuccessIcon";
import { ErrorIcon } from "./ErrorIcon";

export const CopyButton = ({ code }: { code: string }) => {
  const clipboard = useClipboard();
  return (
    <button
      onClick={() => clipboard.copy(code)}
      className="hidden sm:inline-flex items-center justify-center rounded-full p-2 text-sm hover:text-slate-700 dark:hover:text-slate-300 active:text-slate-600 dark:active:text-slate-400"
    >
      {clipboard.state === "READY" && <CopyIcon />}
      {clipboard.state === "SUCCESS" && (
        <SuccessIcon className="text-green-500" />
      )}
      {clipboard.state === "ERROR" && <ErrorIcon className="text-red-500" />}
    </button>
  );
};
