import { z } from "zod";
import { requiredPhoneSchema } from "@/lib/validation/phone";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: requiredPhoneSchema,
  serviceNeeded: z.enum(["bathroom", "kitchen", "concrete", "flooring", "painting", "exterior", "repair", "not-sure"]),
  address: z.string().trim().min(5, "Enter the project address."),
  details: z.string().trim().min(15, "Please add a little more detail about the project."),
});

export type QuoteValues = z.infer<typeof quoteSchema>;
