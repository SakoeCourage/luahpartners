"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { FieldLayout, useFieldIds, type FieldPresentationProps } from "./FieldLayout";
import { inputClassName } from "./input-styles";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & FieldPresentationProps;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, error, errorId, id, hint, required, className = "", ...inputProps }, ref,
) {
  const presentation = { label, error, errorId, id, hint, required };
  const ids = useFieldIds(presentation);
  return (
    <FieldLayout {...presentation} ids={ids}>
      <input {...inputProps} ref={ref} id={ids.id} required={required}
        aria-invalid={Boolean(error)} aria-describedby={ids.describedBy}
        className={`${inputClassName(Boolean(error))} ${className}`} />
    </FieldLayout>
  );
});
