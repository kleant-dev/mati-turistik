"use server";

import { z } from "zod";
import { AdminSettingsFormSchema } from "../schema/AdminSettingsFormSchema";
import { db } from "@/lib/prisma";

export const updateBookingSettings = async (
  formData: z.infer<typeof AdminSettingsFormSchema>
) => {
  const validatedFields = AdminSettingsFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { id, maxDays, maxPersons, pricePerPerson } = validatedFields.data;

  try {
    await db.bookingSettings.update({
      where: {
        id,
      },
      data: {
        maxPersons: Number(maxPersons),
        maxBookingDuration: Number(maxDays),
        pricePerPerson,
      },
    });
  } catch {
    return { error: "Something went wrong" };
  }

  return {
    success: "Settings updated successfully",
  };
};
