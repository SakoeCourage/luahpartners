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

const feedbackOptions = [{ value: "compliment", label: "A compliment" }, { value: "concern", label: "A concern or complaint" }];
const feedbackSchema = z.object({
  feedbackType: z.enum(["compliment", "concern"]),
  name: z.string().trim().max(120, "Use 120 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: optionalPhoneSchema,
  property: z.string().trim().max(180, "Use 180 characters or fewer."),
  person: z.string().trim().max(120, "Use 120 characters or fewer."),
  message: z.string().trim().min(15, "Please include a little more detail.").max(3000, "Use 3,000 characters or fewer."),
  publicQuotePermission: z.boolean(),
  followUp: z.boolean(),
});
type FeedbackValues = z.infer<typeof feedbackSchema>;

function Arrow() { return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />; }

export function FeedbackForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema), mode: "onChange", reValidateMode: "onChange",
    defaultValues: { feedbackType: "compliment", name: "", email: "", phone: "", property: "", person: "", message: "", publicQuotePermission: false, followUp: false },
  });
  const [isReady, setIsReady] = useState(false);
  return <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
    <p className="text-xs text-brand-muted">* Required fields</p>
    <div className="mt-6 space-y-6">
      <FieldShell label={<span id="feedback-type-label">This is *</span>} error={errors.feedbackType} errorId="feedback-type-error" hint="Choose a compliment or concern so we can send it to the right person."><Controller control={control} name="feedbackType" render={({ field }) => <CustomSelect ariaLabelledBy="feedback-type-label" defaultValue="compliment" value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} name={field.name} options={feedbackOptions} required hasError={Boolean(errors.feedbackType)} ariaDescribedBy="feedback-type-error" />} /></FieldShell>
      <TextField label="Your name (optional)" error={errors.name} errorId="feedback-name-error" placeholder="Your name" {...register("name")} />
      <TextField label="Email *" error={errors.email} errorId="feedback-email-error" type="email" placeholder="you@example.com" {...register("email")} />
      <PhoneField control={control} name="phone" label="Phone (optional)" error={errors.phone} errorId="feedback-phone-error" id="feedback-phone" />
      <TextField label="Property, project, or address (optional)" error={errors.property} errorId="feedback-property-error" placeholder="Where this happened, if relevant" {...register("property")} />
      <TextField label={<>Who helped you or who you&apos;d like us to know about (optional)</>} error={errors.person} errorId="feedback-person-error" placeholder="Person or team name" {...register("person")} />
      <TextareaField label="What happened *" error={errors.message} errorId="feedback-message-error" placeholder="Tell it your way, dates and details help us act on it." {...register("message")} />
      <label className="flex cursor-pointer items-start gap-3 text-[13px] font-normal leading-[1.7] text-brand-muted"><input type="checkbox" className="mt-0.5 size-[18px] shrink-0 accent-brand-gold" {...register("publicQuotePermission")} />You may quote this publicly — on the website, in marketing, or as a review — using my first name and last initial. I understand I can withdraw this permission at any time by emailing Info@luahpartners.com.</label>
      <label className="flex cursor-pointer items-start gap-3 text-[13px] font-normal leading-[1.7] text-brand-muted"><input type="checkbox" className="mt-0.5 size-[18px] shrink-0 accent-brand-gold" {...register("followUp")} />Please follow up with me about this. (Leave a name and email above so we can.)</label>
    </div>
    <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Send feedback<Arrow /></button>
    <FormReadyMessage visible={isReady} />
    <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">Handled under our <Link href="/privacy-policy" className="underline underline-offset-2">Privacy Policy</Link>. We do not sell your information, and we never publish feedback without the permission box above.</p>
  </form>;
}
