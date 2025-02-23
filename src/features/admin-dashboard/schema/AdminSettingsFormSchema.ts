import { z } from "zod";

export const AdminSettingsFormSchema = z.object({
  id: z.string(),
  maxPersons: z.string().refine((data) => !isNaN(parseInt(data)), {
    message: "Please provide a valid number",
  }),
  pricePerPerson: z.string().refine((data) => !isNaN(parseFloat(data)), {
    message: "Please provide a valid number",
  }),
  maxDays: z.string().refine((data) => !isNaN(parseInt(data)), {
    message: "Please provide a valid number",
  }),
});
