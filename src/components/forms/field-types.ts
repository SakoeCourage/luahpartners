import type { Control, FieldPathByValue, FieldValues } from "react-hook-form";
import type { FieldPresentationProps } from "./FieldLayout";

export type ControlledFieldProps<T extends FieldValues> = FieldPresentationProps & {
  control: Control<T>;
  name: FieldPathByValue<T, string>;
};
