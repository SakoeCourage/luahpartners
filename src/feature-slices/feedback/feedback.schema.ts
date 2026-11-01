import { z } from "zod";
import { optionalPhoneSchema } from "@/lib/validation/phone";

export const feedbackSchema = z.object({
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
export type FeedbackValues = z.infer<typeof feedbackSchema>;
