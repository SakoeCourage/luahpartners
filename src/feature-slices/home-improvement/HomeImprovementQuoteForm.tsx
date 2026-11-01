"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { quoteSchema, type QuoteValues } from "./quote.schema";
import { FormReadyMessage } from "@/components/forms/FormReadyMessage";
import { SelectField } from "@/components/forms/SelectField";
import { PhoneField } from "@/components/forms/PhoneField";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";

const serviceOptions = [
  { value: "bathroom", label: "Bathroom remodeling" },
  { value: "kitchen", label: "Kitchen remodeling" },
  { value: "concrete", label: "Concrete & masonry" },
  { value: "flooring", label: "Flooring & drywall" },
  { value: "painting", label: "Painting" },
  { value: "exterior", label: "Decks, patios & exterior" },
  { value: "repair", label: "General repair or handyman" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function HomeImprovementQuoteForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", serviceNeeded: "bathroom", address: "", details: "" },
  });
  const [isReady, setIsReady] = useState(false);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Name" error={errors.name} errorId="quote-name-error" placeholder="Your name" {...register("name")} required />
        <TextField label="Email" error={errors.email} errorId="quote-email-error" type="email" placeholder="you@example.com" {...register("email")} required />
        <PhoneField control={control} name="phone" label="Phone" error={errors.phone} errorId="quote-phone-error" id="quote-phone" required />
        <SelectField
          control={control}
          name="serviceNeeded"
          label="Service needed"
          required
          options={serviceOptions}
          errorId="quote-service-error"
          hint="Bathroom remodeling · Kitchen remodeling · Concrete & masonry · Flooring & drywall · Painting · Decks, patios & exterior · General repair or handyman · Not sure yet"
        />
        <TextField label="Property address" error={errors.address} errorId="quote-address-error" placeholder="Street, city DC or MD" {...register("address")} required />
        <TextareaField label="Project details" error={errors.details} errorId="quote-details-error" placeholder="What are you looking to have done?" {...register("details")} required />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">REQUEST A QUOTE<Arrow /></button>
      <FormReadyMessage visible={isReady} />
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information.</p>
    </form>
  );
}
