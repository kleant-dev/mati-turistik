"use server";

import { z } from "zod";
import { BookingFormSchema } from "../schema/BookingFormSchema";
import { db } from "@/lib/prisma";
import { auth } from "@/auth";

export const addBooking = async (
  fields: z.infer<ReturnType<typeof BookingFormSchema>>,
  maxPersons: number
) => {
  const bookingSchema = BookingFormSchema(maxPersons);
  const validatedFields = bookingSchema.safeParse(fields);

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
    await db.bookings.create({
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
    success: "Booking was submitted successfully!",
  };
};
