import { z } from "zod";

export const formValid = z.object({
  fullName: z.string().max(5),
  email: z.string(),
  phoneNo: z.number(),
});
