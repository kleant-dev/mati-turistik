import {
  isValidPhoneNumber,
  parsePhoneNumberWithError,
} from "libphonenumber-js";
import { z } from "zod";

export function phone(schema: z.ZodString) {
  return schema
    .refine((value) => isValidPhoneNumber(value), {
      message:
        "Please specify a valid phone number (include the international prefix).",
    })
    .transform((value) => {
      const parsed = parsePhoneNumberWithError(value);
      return parsed.number.toString();
    });
}
