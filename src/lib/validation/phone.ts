import { z } from "zod";

const hasValidPhoneLength = (value: string) =>
  value.length === 0 || value.replace(/\D/g, "").length >= 10;

export const optionalPhoneSchema = z
  .string()
  .trim()
  .refine(hasValidPhoneLength, "Enter a valid phone number.");

export const requiredPhoneSchema = z
  .string()
  .trim()
  .refine((value) => value.replace(/\D/g, "").length >= 10, "Enter a valid phone number.");
