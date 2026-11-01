"use client";

import { useController, type FieldValues } from "react-hook-form";
import { FieldLayout, useFieldIds } from "./FieldLayout";
import type { ControlledFieldProps } from "./field-types";
import { CustomSelect, type SelectOption } from "./CustomSelect";

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
