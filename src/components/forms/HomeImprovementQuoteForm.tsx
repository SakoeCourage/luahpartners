"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormReadyMessage,
  requiredPhoneSchema,
} from "./FormValidation";
import { SelectField, PhoneField, TextareaField, TextField } from "./FormFields";

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

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: requiredPhoneSchema,
  serviceNeeded: z.enum(["bathroom", "kitchen", "concrete", "flooring", "painting", "exterior", "repair", "not-sure"]),
  address: z.string().trim().min(5, "Enter the project address."),
  details: z.string().trim().min(15, "Please add a little more detail about the project."),
});

type QuoteValues = z.infer<typeof quoteSchema>;

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
