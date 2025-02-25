"use server";

import { db } from "@/lib/prisma";

export const getBookingSettings = async () => {
  try {
    const bookingSettings = await db.bookingSettings.findFirst();
    if (!bookingSettings) {
      return {
        error: "Failed to fetch booking settings",
      };
    }

    const serializedData = {
      ...bookingSettings,
      pricePerPerson: bookingSettings.pricePerPerson
        ? bookingSettings.pricePerPerson.toString()
        : null,
    };

    return { data: serializedData };
  } catch (error) {
    console.error("Error in getBookingSettings:", error);
    return {
      error: "Something went wrong while fetching booking settings",
    };
  }
};
