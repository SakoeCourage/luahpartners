export const inputClassName = (hasError = false) =>
  `mt-[10px] min-h-[52px] w-full border px-4 text-sm font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold ${
    hasError ? "border-red-600" : "border-brand-sand"
  }`;
