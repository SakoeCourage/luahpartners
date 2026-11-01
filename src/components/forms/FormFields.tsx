"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { useController, type Control, type FieldPathByValue, type FieldValues } from "react-hook-form";
import { CustomSelect, type SelectOption } from "@/components/CustomSelect";
import { InternationalPhoneInput } from "@/components/InternationalPhoneInput";
import { FieldLayout, useFieldIds, type FieldPresentationProps } from "./FieldLayout";
import { inputClassName } from "./FormValidation";

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

type ControlledFieldProps<T extends FieldValues> = FieldPresentationProps & {
  control: Control<T>;
  name: FieldPathByValue<T, string>;
};

export function SelectField<T extends FieldValues>({ control, name, options, ...presentation }: ControlledFieldProps<T> & {
  options: readonly SelectOption[];
}) {
  const { field, fieldState } = useController({ control, name });
  const error = presentation.error ?? fieldState.error;
  const ids = useFieldIds({ ...presentation, error });
  return (
    <FieldLayout {...presentation} error={error} ids={ids}>
      <CustomSelect
        id={ids.id}
        inputRef={field.ref}
        ariaLabelledBy={ids.labelId}
        ariaDescribedBy={ids.describedBy}
        name={field.name}
        value={field.value}
        defaultValue={field.value}
        options={options}
        required={presentation.required}
        onValueChange={field.onChange}
        onBlur={field.onBlur}
        hasError={Boolean(error)}
      />
    </FieldLayout>
  );
}

export function PhoneField<T extends FieldValues>({ control, name, ariaLabel = "Phone number", ...presentation }: ControlledFieldProps<T> & {
  ariaLabel?: string;
}) {
  const { field, fieldState } = useController({ control, name });
  const error = presentation.error ?? fieldState.error;
  const ids = useFieldIds({ ...presentation, error });
  return (
    <FieldLayout {...presentation} error={error} ids={ids}>
      <div className="mt-[10px] font-normal">
        <InternationalPhoneInput
          id={ids.id}
          name={field.name}
          ariaLabel={ariaLabel}
          required={presentation.required}
          onChange={field.onChange}
          onBlur={field.onBlur}
          hasError={Boolean(error)}
          ariaDescribedBy={ids.describedBy}
        />
      </div>
    </FieldLayout>
  );
}
