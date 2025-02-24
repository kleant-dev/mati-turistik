import { z } from "zod";
import { phone } from "@/utils/phone";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

export const ReservationSchema = (maxPersons: number) =>
  z
    .object({
      startDate: z
        .date()
        .min(tomorrow, { message: "Start date must be tomorrow or later" }),

      endDate: z.date(),

      numberOfPersons: z
        .number({ message: "Number of persons is required" })
        .min(1, { message: "There must be at least 1 person" })
        .max(maxPersons, { message: `Limit is ${maxPersons} persons` }),

      telephone: phone(
        z.string().min(6, { message: "Invalid phone number format" })
      ),

      additionalMessage: z
        .string()
        .max(500, { message: "Message cannot exceed 500 characters" })
        .optional(),

      totalPrice: z.number(),
    })
    .refine((data) => data.endDate > data.startDate, {
      message: "End date must be at least 1 day after start date",
      path: ["endDate"],
    });
