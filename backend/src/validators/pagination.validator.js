import { z } from "zod";

export const paginationSchema = z.strictObject({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(10).default(10),
});
