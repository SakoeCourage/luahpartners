"use client";

import type { FieldError } from "react-hook-form";
import type { ReactNode } from "react";
import { z } from "zod";

const hasValidPhoneLength = (value: string) =>
  value.length === 0 || value.replace(/\D/g, "").length >= 10;

export const optionalPhoneSchema = z
  .string()
  .trim()
  .refine(hasValidPhoneLength, "Enter a valid phone number.");

export const requiredPhoneSchema = z
  .string()
  .trim()
  .refine((value) => value.replace(/\D/g, "").length >= 10, "Enter a valid phone number.");

export const inputClassName = (hasError = false) =>
  `mt-[10px] min-h-[52px] w-full border px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold ${
    hasError ? "border-red-600" : "border-brand-sand"
  }`;

export function FieldErrorMessage({
  id,
  error,
}: {
  id: string;
  error?: FieldError;
}) {
  if (!error?.message) return null;

  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-xs font-normal leading-[1.5] text-red-600">
      <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" className="mt-[-2px] shrink-0" aria-hidden="true">
        <path fillRule="evenodd" d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z" />
      </svg>
      {error.message}
    </p>
  );
}

export function FormReadyMessage({
  visible,
  children = "Your details have passed validation. Online submissions will be connected when Luah Partners confirms its preferred system.",
}: {
  visible: boolean;
  children?: ReactNode;
}) {
  if (!visible) return null;

  return (
    <p className="mt-4 border-l-2 border-brand-gold bg-brand-sand-light px-3 py-2 text-sm text-brand-navy" aria-live="polite">
      {children}
    </p>
  );
}
