"use server";

import { db } from "@/lib/prisma";
import { BookingStatus } from "@prisma/client";

export async function updateBookingStatus(id: string, status: BookingStatus) {
  try {
    await db.bookings.update({
      where: { id },
      data: { status },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to update booking status:", error);
    return { success: false, error: "Failed to update status" };
  }
}
