"use server";

import { db } from "@/lib/prisma";
import { ReservationStatus } from "@prisma/client";

export async function updateReservationStatus(
  id: string,
  status: ReservationStatus
) {
  try {
    await db.reservations.update({
      where: { id },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to update reservation status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
