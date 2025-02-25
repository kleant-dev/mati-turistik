"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteBooking = async (id: string) => {
  await db.bookings.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard");
};
