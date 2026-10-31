"use client";

import type { ReactNode } from "react";
import { ProgressProvider } from "@bprogress/next/app";

export default function NprogressProvider({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider
      height="5px"
      color="#B08D4F"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
