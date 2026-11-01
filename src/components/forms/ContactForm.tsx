"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CustomSelect } from "@/components/CustomSelect";
import { FieldShell, PhoneField, TextareaField, TextField } from "./FormFields";
import { FormReadyMessage, optionalPhoneSchema } from "./FormValidation";

const audienceOptions = [
  { value: "prospective-resident", label: "Prospective resident" },
  { value: "current-resident", label: "Current resident" },
  { value: "property-owner", label: "Property owner" },
  { value: "seller-landowner", label: "Seller or Landowner" },
  { value: "vendor", label: "Vendor" },
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: optionalPhoneSchema,
  audience: z.enum(["prospective-resident", "current-resident", "property-owner", "seller-landowner", "vendor"]),
  message: z.string().trim().max(2000, "Use 2,000 characters or fewer."),
});

type ContactValues = z.infer<typeof contactSchema>;

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function ContactForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema), mode: "onChange", reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", audience: "prospective-resident", message: "" },
  });
  const [isReady, setIsReady] = useState(false);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Name *" error={errors.name} errorId="contact-name-error" placeholder="Enter name" {...register("name")} />
        <TextField label="Email *" error={errors.email} errorId="contact-email-error" type="email" placeholder="you@example.com" {...register("email")} />
        <PhoneField control={control} name="phone" label="Phone (optional)" error={errors.phone} errorId="contact-phone-error" id="contact-phone" />
        <FieldShell label={<span id="contact-audience-label">I am a... (optional)</span>} error={errors.audience} errorId="contact-audience-error" hint="Prospective resident · Current resident · Property owner · Seller or Landowner · Vendor"><Controller control={control} name="audience" render={({ field }) => <CustomSelect ariaLabelledBy="contact-audience-label" defaultValue="prospective-resident" value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} name={field.name} options={audienceOptions} hasError={Boolean(errors.audience)} ariaDescribedBy="contact-audience-error" />} /></FieldShell>
        <TextareaField label="Message (optional)" error={errors.message} errorId="contact-message-error" placeholder="How can we help" {...register("message")} />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Send message<Arrow /></button>
      <FormReadyMessage visible={isReady} />
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information.</p>
    </form>
  );
}
