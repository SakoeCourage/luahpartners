"use client";

import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { CustomSelect } from "@/components/CustomSelect";
import { FieldShell, TextField } from "./FormFields";
import { FormReadyMessage } from "./FormValidation";

const paymentTypeOptions = [
  { value: "rent", label: "Rent" },
  { value: "security-deposit", label: "Security Deposit" },
  { value: "application-fee", label: "Application Fee" },
  { value: "invoice", label: "Invoice" },
];

const paymentSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  paymentType: z.enum(["rent", "security-deposit", "application-fee", "invoice"]),
  email: z.string().trim().email("Enter a valid email address."),
  amount: z.string().trim().refine((value) => Number.isFinite(Number(value)) && Number(value) > 0, "Enter an amount greater than $0.00."),
});

type PaymentValues = z.infer<typeof paymentSchema>;

function Arrow() {
  return <Image src="/images/listing-arrow-right.svg" alt="" aria-hidden="true" width={16} height={16} />;
}

export function PaymentForm() {
  const { control, handleSubmit, register, formState: { errors } } = useForm<PaymentValues>({
    resolver: zodResolver(paymentSchema), mode: "onChange", reValidateMode: "onChange",
    defaultValues: { name: "", paymentType: "rent", email: "", amount: "" },
  });
  const [isReady, setIsReady] = useState(false);

  return (
    <form className="border border-brand-sand bg-white p-6 sm:p-8" noValidate onSubmit={handleSubmit(() => setIsReady(true), () => setIsReady(false))}>
      <p className="text-xs text-brand-muted">* Required fields</p>
      <div className="mt-6 space-y-6">
        <TextField label="Full name *" error={errors.name} errorId="payment-name-error" placeholder="Your name" {...register("name")} />
        <FieldShell label={<span id="payment-type-label">Payment type *</span>} error={errors.paymentType} errorId="payment-type-error"><div className="max-w-[248px]"><Controller control={control} name="paymentType" render={({ field }) => <CustomSelect ariaLabelledBy="payment-type-label" defaultValue="rent" value={field.value} onValueChange={field.onChange} onBlur={field.onBlur} name={field.name} options={paymentTypeOptions} required hasError={Boolean(errors.paymentType)} ariaDescribedBy="payment-type-error" />} /></div></FieldShell>
        <TextField label="Email for receipt *" error={errors.email} errorId="payment-email-error" type="email" placeholder="you@example.com" {...register("email")} />
        <TextField label="Amount (USD) *" error={errors.amount} errorId="payment-amount-error" type="number" min="0.01" step="0.01" inputMode="decimal" placeholder="$  2,150.00" {...register("amount")} />
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-3 border border-brand-gold-light bg-brand-gold-light px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold">Continue to secure checkout<Arrow /></button>
      <FormReadyMessage visible={isReady}>Your payment details have passed validation. Secure Stripe Checkout will be connected once Luah Partners confirms its payment workflow.</FormReadyMessage>
      <p className="mt-6 text-[13px] leading-[1.8] text-brand-muted">Your card and bank details are entered on Stripe, not on this form.</p>
    </form>
  );
}
