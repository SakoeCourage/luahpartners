"use client";

import { useController, type FieldValues } from "react-hook-form";
import { FieldLayout, useFieldIds } from "./FieldLayout";
import type { ControlledFieldProps } from "./field-types";
import { InternationalPhoneInput } from "./InternationalPhoneInput";

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
