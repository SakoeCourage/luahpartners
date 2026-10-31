"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";

type InternationalPhoneInputProps = {
  id?: string;
  name?: string;
  ariaLabel?: string;
  required?: boolean;
};

export function InternationalPhoneInput({
  id = "phone",
  name = "phone",
  ariaLabel = "Phone number",
  required = false,
}: InternationalPhoneInputProps) {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country="us"
      value={phone}
      onChange={(value) => setPhone(value)}
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
        required,
      }}
    />
  );
}
