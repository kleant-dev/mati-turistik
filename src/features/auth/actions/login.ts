"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { z } from "zod";
import { LoginFormSchema } from "../schema/LoginFormSchema";

export const login = async (fields: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(fields);

  if (!validatedFields.success) {
    return {
      error: "Invalid form fields",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "User does not exist",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }

  return {
    success: "Successfully signed in!",
  };
};
