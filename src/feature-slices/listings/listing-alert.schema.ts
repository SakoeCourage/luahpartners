import { z } from "zod";
import { optionalPhoneSchema } from "@/lib/validation/phone";

export const listingAlertSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: optionalPhoneSchema,
  interest: z.enum(["lease-now", "studio-one", "two-three", "multifamily", "not-sure"]),
  preferredArea: z.string().trim().max(120, "Use 120 characters or fewer."),
});

export type ListingAlertValues = z.infer<typeof listingAlertSchema>;
