export const inputClassName = (hasError = false) =>
  `luah-text-control mt-[10px] min-h-[52px] w-full border px-4 text-base font-normal text-brand-navy placeholder:text-brand-muted outline-none focus:border-brand-gold ${
    hasError ? "border-red-600" : "border-brand-sand"
  }`;
