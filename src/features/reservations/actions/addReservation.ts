"use server";

import { z } from "zod";
import { ReservationSchema } from "../schema/ReservationSchema";
import { db } from "@/lib/prisma";
import { auth } from "@/auth";

export const addReservation = async (
  fields: z.infer<ReturnType<typeof ReservationSchema>>,
  maxPersons: number
) => {
  const reservationSchema = ReservationSchema(maxPersons);
  const validatedFields = reservationSchema.safeParse(fields);

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

  const startDate = new Date(
    data.startDate.getFullYear(),
    data.startDate.getMonth(),
    data.startDate.getDate() + 1
  );
  const endDate = new Date(
    data.endDate.getFullYear(),
    data.endDate.getMonth(),
    data.endDate.getDate() + 1
  );

  try {
    await db.reservations.create({
      data: {
        ...data,
        startDate,
        endDate,
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
