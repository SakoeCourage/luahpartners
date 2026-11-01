"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { applicationSchema, type ApplicationValues } from "./application.schema";
import { SelectField } from "@/components/forms/SelectField";
import { PhoneField } from "@/components/forms/PhoneField";
import { TextareaField } from "@/components/forms/TextareaField";
import { TextField } from "@/components/forms/TextField";
import { FormReadyMessage } from "@/components/forms/FormReadyMessage";
import { FileUploadField } from "@/components/forms/FileUploadField";

const roleOptions = [
  { value: "", label: "Choose one" },
  { value: "marketing", label: "Marketing Agent" },
  { value: "sales", label: "Sales Agent" },
  { value: "scout", label: "Property Scout" },
  { value: "manager", label: "Property Manager" },
  { value: "business-development", label: "Business Development Specialist" },
  { value: "leasing", label: "Leasing Agent" },
  { value: "trades", label: "Skilled Trades and Field Crew" },
  { value: "general", label: "Something Else or General Application" },
];

const experienceOptions = [
  { value: "less-than-one", label: "Less than 1 year" },
  { value: "one-to-three", label: "1 - 3 years" },
  { value: "three-to-seven", label: "3 - 7 years" },
  { value: "seven-plus", label: "7+ years" },
];

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function CareersApplicationForm() {
  const { control, handleSubmit, register, subscribe, formState: { errors } } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", role: "", location: "", experience: "less-than-one", resume: null, portfolio: "", why: "" },
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    return subscribe({ formState: { values: true }, callback: () => setIsReady(false) });
  }, [subscribe]);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Name" error={errors.name} errorId="career-name-error" placeholder="Your name" {...register("name")} required />
        <TextField label="Email" error={errors.email} errorId="career-email-error" type="email" placeholder="you@example.com" {...register("email")} required />
        <PhoneField control={control} name="phone" label="Phone" error={errors.phone} errorId="career-phone-error" id="career-phone" required />
        <SelectField
          control={control}
          name="role"
          label="Role"
          required
          options={roleOptions}
          errorId="career-role-error"
          hint="Marketing Agent · Sales Agent · Property Scout · Property Manager · Business Development Specialist · Leasing Agent · Skilled Trades and Field Crew · Something Else or General Application"
        />
        <TextField label="Where are you based" error={errors.location} errorId="career-location-error" placeholder="Neighborhood, city or county" {...register("location")} required />
        <SelectField
          control={control}
          name="experience"
          label="Years of experience"
          required
          options={experienceOptions}
          errorId="career-experience-error"
          hint="Less than 1 year · 1 - 3 years · 3 - 7 years · 7+ years"
        />
        <FileUploadField
          control={control}
          name="resume"
          id="career-resume"
          label="Resume"
          required
          accept=".pdf,.doc,.docx"
          errorId="career-resume-error"
          hint="PDF or Word document. Prefer email? Send it to Info@luahpartners.com instead. One file."
        />
        <TextField label="LinkedIn or portfolio (optional)" error={errors.portfolio} errorId="career-portfolio-error" placeholder="A link to your profile or work samples" {...register("portfolio")} />
        <TextareaField label="Why this role" error={errors.why} errorId="career-why-error" placeholder="Tell us about your experience and what draws you to this work" {...register("why")} required />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Submit application<Arrow /></button>
      <FormReadyMessage visible={isReady} />
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information. Prefer email? Send your resume to Info@luahpartners.com.</p>
    </form>
  );
}
