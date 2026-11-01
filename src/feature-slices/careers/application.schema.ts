import { z } from "zod";
import { requiredPhoneSchema } from "@/lib/validation/phone";

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: requiredPhoneSchema,
  role: z.string().min(1, "Select a role."),
  location: z.string().trim().min(2, "Enter where you are based."),
  experience: z.enum(["less-than-one", "one-to-three", "three-to-seven", "seven-plus"]),
  resume: z.custom<File | null>().superRefine((file, context) => {
    if (typeof File === "undefined" || !(file instanceof File)) {
      context.addIssue({ code: "custom", message: "Upload one resume file." });
      return;
    }
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !["pdf", "doc", "docx"].includes(extension)) {
      context.addIssue({ code: "custom", message: "Use a PDF or Word document." });
    }
  }),
  portfolio: z.string().trim().max(500, "Use 500 characters or fewer."),
  why: z.string().trim().min(15, "Please tell us a little more about your experience."),
});

export type ApplicationValues = z.infer<typeof applicationSchema>;
