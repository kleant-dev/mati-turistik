"use server";

import { getUserByEmail } from "@/data/user";
import { RegisterFormSchema } from "../schema/RegisterFormSchema";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const register = async (fields: z.infer<typeof RegisterFormSchema>) => {
  const validatedFields = RegisterFormSchema.safeParse(fields);
  if (!validatedFields.success) {
    return {
      error: "Invalid form fields",
    };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch {
    return {
      error: "Something went wrong!",
    };
  }

  return {
    success: "Account successfully created!",
  };
};
