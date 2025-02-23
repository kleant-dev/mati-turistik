"use server";

import { z } from "zod";
import { ReservationSchema } from "../schema/ReservationSchema";
import { db } from "@/lib/prisma";
import { auth } from "@/auth";

export const addReservation = async (
  fields: z.infer<typeof ReservationSchema>
) => {
  const validatedFields = ReservationSchema.safeParse(fields);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const data = validatedFields.data;
  const userId = (await auth())?.user.id;

  if (!userId) {
    return {
      error: "Something went wrong!",
    };
  }

  try {
    await db.reservations.create({
      data: {
        ...data,
        userId,
      },
    });
  } catch {
    return { error: "Something went wrong!" };
  }

  return {
    success: "Reservation was submitted successfully!",
  };
};
