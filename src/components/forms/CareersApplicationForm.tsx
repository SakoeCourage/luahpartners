"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CustomSelect } from "@/components/CustomSelect";
import { FieldShell, PhoneField, TextareaField, TextField } from "./FormFields";
import { FieldErrorMessage, FormReadyMessage, requiredPhoneSchema } from "./FormValidation";

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

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: requiredPhoneSchema,
  role: z.string().min(1, "Select a role."),
  location: z.string().trim().min(2, "Enter where you are based."),
  experience: z.enum(["less-than-one", "one-to-three", "three-to-seven", "seven-plus"]),
  resume: z
    .custom<FileList>()
    .refine((files) => files instanceof FileList && files.length === 1, "Upload one resume file.")
    .refine((files) => {
      const extension = files?.[0]?.name.split(".").pop()?.toLowerCase();
      return extension === "pdf" || extension === "doc" || extension === "docx";
    }, "Use a PDF or Word document."),
  portfolio: z.string().trim().max(500, "Use 500 characters or fewer."),
  why: z.string().trim().min(15, "Please tell us a little more about your experience."),
});

type ApplicationValues = z.infer<typeof applicationSchema>;

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function CareersApplicationForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { name: "", email: "", phone: "", role: "", location: "", experience: "less-than-one", portfolio: "", why: "" },
  });
  const [isReady, setIsReady] = useState(false);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Name *" error={errors.name} errorId="career-name-error" placeholder="Your name" {...register("name")} />
        <TextField label="Email *" error={errors.email} errorId="career-email-error" type="email" placeholder="you@example.com" {...register("email")} />
        <PhoneField control={control} name="phone" label="Phone *" error={errors.phone} errorId="career-phone-error" id="career-phone" required />
        <FieldShell label={<span id="career-role-label">Role *</span>} error={errors.role} errorId="career-role-error" hint="Marketing Agent · Sales Agent · Property Scout · Property Manager · Business Development Specialist · Leasing Agent · Skilled Trades and Field Crew · Something Else or General Application"><Controller control={control} name="role" render={({ field }) => <CustomSelect ariaLabelledBy="career-role-label" defaultValue="" value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} name={field.name} options={roleOptions} required hasError={Boolean(errors.role)} ariaDescribedBy="career-role-error" />} /></FieldShell>
        <TextField label="Where are you based *" error={errors.location} errorId="career-location-error" placeholder="Neighborhood, city or county" {...register("location")} />
        <FieldShell label={<span id="career-experience-label">Years of experience *</span>} error={errors.experience} errorId="career-experience-error" hint="Less than 1 year · 1 - 3 years · 3 - 7 years · 7+ years"><Controller control={control} name="experience" render={({ field }) => <CustomSelect ariaLabelledBy="career-experience-label" defaultValue="less-than-one" value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} name={field.name} options={experienceOptions} required hasError={Boolean(errors.experience)} ariaDescribedBy="career-experience-error" />} /></FieldShell>
        <div className="block text-sm font-semibold text-brand-navy"><span>Resume *</span><span className={`relative mt-[10px] flex min-h-[100px] w-full items-center justify-between border px-4 text-sm font-normal text-brand-muted ${errors.resume ? "border-red-600" : "border-brand-sand"}`}><span>Choose file</span><Image src="/images/careers-upload.svg" alt="" aria-hidden="true" width={18} height={18} /><input {...register("resume")} type="file" accept=".pdf,.doc,.docx" aria-invalid={Boolean(errors.resume)} aria-describedby="career-resume-error" className="absolute inset-0 cursor-pointer opacity-0" /></span><FieldErrorMessage id="career-resume-error" error={errors.resume} /></div>
        <p className="-mt-4 text-xs leading-[1.8] text-brand-muted">PDF or Word document. Prefer email? Send it to Info@luahpartners.com instead. One file.</p>
        <TextField label="LinkedIn or portfolio (optional)" error={errors.portfolio} errorId="career-portfolio-error" placeholder="A link to your profile or work samples" {...register("portfolio")} />
        <TextareaField label="Why this role *" error={errors.why} errorId="career-why-error" placeholder="Tell us about your experience and what draws you to this work" {...register("why")} />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Submit application<Arrow /></button>
      <FormReadyMessage visible={isReady} />
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">By submitting you agree to our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information. Prefer email? Send your resume to Info@luahpartners.com.</p>
    </form>
  );
}
