"use client";

import { useId, type ReactNode } from "react";
import type { FieldError } from "react-hook-form";
import { FieldErrorMessage } from "./FieldErrorMessage";

export type FieldPresentationProps = {
  label: ReactNode;
  required?: boolean;
  hint?: ReactNode;
  error?: FieldError;
  id?: string;
  errorId?: string;
};

export function useFieldIds({ id, errorId, hint, error }: FieldPresentationProps) {
  const generatedId = useId();
  const inputId = id ?? `field-${generatedId}`;
  const messageId = errorId ?? `${inputId}-error`;
  return {
    id: inputId,
    labelId: `${inputId}-label`,
    hintId: `${inputId}-hint`,
    errorId: messageId,
    describedBy: [hint ? `${inputId}-hint` : undefined, error ? messageId : undefined].filter(Boolean).join(" ") || undefined,
  };
}

export function FieldLayout({ label, required, hint, error, ids, children }: FieldPresentationProps & {
  ids: ReturnType<typeof useFieldIds>;
  children: ReactNode;
}) {
  return (
    <div className="text-sm text-brand-navy">
      <label id={ids.labelId} htmlFor={ids.id} className="block font-semibold">
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      <FieldErrorMessage id={ids.errorId} error={error} />
      {hint && <p id={ids.hintId} className="mt-[10px] text-xs font-normal leading-[1.7] text-brand-muted">{hint}</p>}
    </div>
  );
}
