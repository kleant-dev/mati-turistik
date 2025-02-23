"use server";

import { z } from "zod";
import { AdminSettingsFormSchema } from "../schema/AdminSettingsFormSchema";
import { db } from "@/lib/prisma";

export const updateReservationSettings = async (
  formData: z.infer<typeof AdminSettingsFormSchema>
) => {
  const validatedFields = AdminSettingsFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { id, maxDays, maxPersons, pricePerPerson } = validatedFields.data;

  try {
    await db.reservationSettings.update({
      where: {
        id,
      },
      data: {
        maxPersons: Number(maxPersons),
        maxReservationDuration: Number(maxDays),
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
