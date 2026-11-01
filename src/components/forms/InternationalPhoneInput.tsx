"use client";

import { type FormEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";

type InternationalPhoneInputProps = {
  id?: string;
  name?: string;
  ariaLabel?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  hasError?: boolean;
  ariaDescribedBy?: string;
};

export function InternationalPhoneInput({
  id = "phone",
  name = "phone",
  ariaLabel = "Phone number",
  required = false,
  onChange,
  onBlur,
  hasError = false,
  ariaDescribedBy,
}: InternationalPhoneInputProps) {
  const [displayPhone, setDisplayPhone] = useState("44");

  return (
    <PhoneInput
      country="gb"
      value={displayPhone}
      onChange={(nextValue) => {
        setDisplayPhone(nextValue);
        onChange?.(nextValue);
      }}
      onBlur={() => onBlur?.()}
      enableSearch
      disableCountryCode={false}
      countryCodeEditable={false}
      preferredCountries={["us", "gb", "ca"]}
      searchPlaceholder="Search"
      searchNotFound="No countries found"
      placeholder="(202) 555-0134"
      containerClass="luah-phone-input"
      inputProps={{
        name,
        id,
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescribedBy,
        "aria-invalid": hasError || undefined,
        required,
        onInput: (event: FormEvent<HTMLInputElement>) => {
          const nextValue = event.currentTarget.value.replace(/\D/g, "");
          setDisplayPhone(nextValue);
          onChange?.(nextValue);
        },
      }}
      inputClass={hasError ? "luah-phone-input-error" : undefined}
    />
  );
}
