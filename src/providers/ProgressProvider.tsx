"use client";

import type { ReactNode } from "react";
import { ProgressProvider as BProgressProvider } from "@bprogress/next/app";

export default function ProgressProvider({ children }: { children: ReactNode }) {
  return (
    <BProgressProvider
      height="5px"
      color="#B08D4F"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </BProgressProvider>
  );
}
