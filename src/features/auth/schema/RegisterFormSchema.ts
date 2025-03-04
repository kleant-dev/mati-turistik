import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
