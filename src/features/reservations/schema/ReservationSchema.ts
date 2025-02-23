import { z } from "zod";
import { phone } from "@/utils/phone";
import { endDate, tomorrow } from "../components/ReservationForm";

export const ReservationSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  numberOfPersons: z
    .number()
    .min(1, { message: "There must be at least 1 person" })
    .max(10, { message: "Limit is 10 persons" }),
  telephone: phone(z.string()),
  additionalMessage: z.string().optional(),
  totalPrice: z.number(),
});
