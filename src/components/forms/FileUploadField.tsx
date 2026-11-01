"use client";

import Image from "next/image";
import { useRef } from "react";
import { useController, type Control, type FieldPathByValue, type FieldValues } from "react-hook-form";
import { FieldLayout, useFieldIds, type FieldPresentationProps } from "./FieldLayout";

type FileUploadFieldProps<T extends FieldValues> = FieldPresentationProps & {
  control: Control<T>;
  name: FieldPathByValue<T, File | null>;
  accept: string;
};

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FileUploadField<T extends FieldValues>({ control, name, accept, ...presentation }: FileUploadFieldProps<T>) {
  const { field, fieldState } = useController({ control, name });
  const error = presentation.error ?? fieldState.error;
  const ids = useFieldIds({ ...presentation, error });
  const { id } = ids;
  const inputRef = useRef<HTMLInputElement>(null);
  const chooseRef = useRef<HTMLButtonElement | null>(null);
  const file = field.value as File | null;
  const describedBy = [ids.describedBy, file ? `${id}-selection` : undefined].filter(Boolean).join(" ");

  function removeFile() {
    if (inputRef.current) inputRef.current.value = "";
    field.onChange(null);
    chooseRef.current?.focus();
  }

  return (
    <FieldLayout {...presentation} error={error} ids={ids}>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        required={presentation.required}
        tabIndex={-1}
        className="sr-only"
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        onChange={(event) => {
          // Cancelling a replacement must keep the existing selection.
          const selected = event.currentTarget.files?.item(0);
          if (selected) field.onChange(selected);
        }}
      />
      <div className={`mt-[10px] border ${error ? "border-red-600" : "border-brand-sand"} ${file ? "bg-brand-sand-light" : "bg-white"}`}>
        {file && (
          <div id={`${id}-selection`} role="status" className="flex items-start gap-3 px-4 pt-5">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 size-6 shrink-0 text-brand-gold">
              <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" />
              <path d="M14 3v5h5M8 12h8M8 16h5" />
            </svg>
            <div className="min-w-0">
              <p className="break-all font-semibold leading-6">{file.name}</p>
              <p className="mt-1 text-xs leading-[1.7] text-brand-muted">{formatFileSize(file.size)} · {error ? "Check file below" : "File selected"}</p>
            </div>
          </div>
        )}
        <div className={file ? "flex flex-wrap gap-x-6 gap-y-2 px-4 py-4" : ""}>
          <button
            ref={(element) => {
              chooseRef.current = element;
              field.ref(element);
            }}
            type="button"
            id={`${id}-choose`}
            onClick={() => inputRef.current?.click()}
            onBlur={field.onBlur}
            aria-labelledby={`${id}-label ${id}-choose`}
            aria-describedby={describedBy || undefined}
            className={`${file ? "min-h-10 font-semibold underline underline-offset-4" : "flex min-h-[100px] w-full items-center justify-between px-4 text-brand-muted"} outline-none transition-colors hover:text-brand-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold`}
          >
            {file ? "Replace file" : "Choose file"}
            {!file && <Image src="/images/careers-upload.svg" alt="" aria-hidden="true" width={18} height={18} />}
          </button>
          {file && <button type="button" onClick={removeFile} className="min-h-10 text-brand-muted underline underline-offset-4 outline-none transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold">Remove file</button>}
        </div>
      </div>
    </FieldLayout>
  );
}
