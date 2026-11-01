"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormReadyMessage,
  optionalPhoneSchema,
} from "./FormValidation";
import { SelectField, PhoneField, TextField } from "./FormFields";

const interestOptions = [
  { value: "lease-now", label: "A home for lease now" },
  { value: "studio-one", label: "Studio or 1 bedroom" },
  { value: "two-three", label: "2 or 3 bedroom" },
  { value: "multifamily", label: "Multifamily or investment unit" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const listingAlertSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: optionalPhoneSchema,
  interest: z.enum(["lease-now", "studio-one", "two-three", "multifamily", "not-sure"]),
  preferredArea: z.string().trim().max(120, "Use 120 characters or fewer."),
});

type ListingAlertValues = z.infer<typeof listingAlertSchema>;

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function ListingAlertForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ListingAlertValues>({
    resolver: zodResolver(listingAlertSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "lease-now",
      preferredArea: "",
    },
  });
  const [isReady, setIsReady] = useState(false);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Name" error={errors.name} errorId="listing-name-error" placeholder="Your name" {...register("name")} required />
        <TextField label="Email" error={errors.email} errorId="listing-email-error" type="email" placeholder="you@example.com" {...register("email")} required />
        <PhoneField control={control} name="phone" label="Phone (optional)" error={errors.phone} errorId="listing-phone-error" />
        <SelectField
          control={control}
          name="interest"
          label="Looking for"
          required
          options={interestOptions}
          errorId="listing-interest-error"
          hint="A home for lease now · Studio or 1 bedroom · 2 or 3 bedroom · Multifamily or investment unit · Not sure yet"
        />
        <TextField label="Preferred area (optional)" error={errors.preferredArea} errorId="listing-area-error" placeholder="Neighborhood, city or county" {...register("preferredArea")} />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">NOTIFY ME<Arrow /></button>
      <FormReadyMessage visible={isReady} />
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information.</p>
    </form>
  );
}
