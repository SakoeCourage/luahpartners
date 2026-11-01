"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { FieldLayout, useFieldIds, type FieldPresentationProps } from "./FieldLayout";
import { inputClassName } from "./input-styles";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & FieldPresentationProps;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(function TextareaField(
  { label, error, errorId, id, hint, required, className = "", ...textareaProps }, ref,
) {
  const presentation = { label, error, errorId, id, hint, required };
  const ids = useFieldIds(presentation);
  return (
    <FieldLayout {...presentation} ids={ids}>
      <textarea {...textareaProps} ref={ref} id={ids.id} required={required}
        aria-invalid={Boolean(error)} aria-describedby={ids.describedBy}
        className={`${inputClassName(Boolean(error))} min-h-[120px] resize-y p-4 ${className}`} />
    </FieldLayout>
  );
});
