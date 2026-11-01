"use client";

import PhoneInput from "react-phone-input-2";

type InternationalPhoneInputProps = {
  id?: string;
  name?: string;
  ariaLabel?: string;
  required?: boolean;
  value?: string;
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
  value = "",
  onChange,
  onBlur,
  hasError = false,
  ariaDescribedBy,
}: InternationalPhoneInputProps) {
  return (
    <PhoneInput
      country="us"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      enableSearch
      disableCountryCode
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
      }}
      inputClass={hasError ? "luah-phone-input-error" : undefined}
    />
  );
}
