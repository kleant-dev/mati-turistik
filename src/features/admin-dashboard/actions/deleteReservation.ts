"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteReservation = async (id: string) => {
  await db.reservations.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard");
};
