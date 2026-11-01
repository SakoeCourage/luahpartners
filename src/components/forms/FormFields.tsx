"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { Controller, type Control, type FieldError, type FieldPath, type FieldValues } from "react-hook-form";
import { InternationalPhoneInput } from "@/components/InternationalPhoneInput";
import { FieldErrorMessage, inputClassName } from "./FormValidation";

type FieldShellProps = {
  label: ReactNode;
  error?: FieldError;
  errorId: string;
  children: ReactNode;
  hint?: ReactNode;
};

export function FieldShell({ label, error, errorId, children, hint }: FieldShellProps) {
  return (
    <div className="block text-sm font-semibold text-brand-navy">
      <span>{label}</span>
      {children}
      <FieldErrorMessage id={errorId} error={error} />
      {hint ? <span className="mt-[10px] block text-xs font-normal leading-[1.7] text-brand-muted">{hint}</span> : null}
    </div>
  );
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  error?: FieldError;
  errorId: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField({ label, error, errorId, className = "", ...inputProps }, ref) {
  return (
    <label className="block text-sm font-semibold text-brand-navy">
      <span>{label}</span>
      <input
        {...inputProps}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`${inputClassName(Boolean(error))} ${className}`}
      />
      <FieldErrorMessage id={errorId} error={error} />
    </label>
  );
});

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: ReactNode;
  error?: FieldError;
  errorId: string;
};

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(function TextareaField({ label, error, errorId, className = "", ...textareaProps }, ref) {
  return (
    <label className="block text-sm font-semibold text-brand-navy">
      <span>{label}</span>
      <textarea
        {...textareaProps}
        ref={ref}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={`${inputClassName(Boolean(error))} min-h-[120px] resize-y p-4 ${className}`}
      />
      <FieldErrorMessage id={errorId} error={error} />
    </label>
  );
});

type PhoneFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: ReactNode;
  error?: FieldError;
  errorId: string;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
};

export function PhoneField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  error,
  errorId,
  id,
  ariaLabel = "Phone number",
  required = false,
}: PhoneFieldProps<TFieldValues>) {
  return (
    <label className="block text-sm font-semibold text-brand-navy">
      <span>{label}</span>
      <span className="mt-[10px] block font-normal">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <InternationalPhoneInput
              id={id}
              name={field.name}
              ariaLabel={ariaLabel}
              required={required}
              onChange={field.onChange}
              onBlur={field.onBlur}
              hasError={Boolean(error)}
              ariaDescribedBy={errorId}
            />
          )}
        />
      </span>
      <FieldErrorMessage id={errorId} error={error} />
    </label>
  );
}
