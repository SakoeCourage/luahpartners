import { z } from "zod";

export const paymentSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  paymentType: z.enum(["rent", "security-deposit", "application-fee", "invoice"]),
  email: z.string().trim().email("Enter a valid email address."),
  amount: z.string().trim().refine((value) => Number.isFinite(Number(value)) && Number(value) > 0, "Enter an amount greater than $0.00."),
});

export type PaymentValues = z.infer<typeof paymentSchema>;
