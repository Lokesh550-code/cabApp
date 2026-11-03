import { z } from "zod";

export const createServiceSchema = z.strictObject({
  serviceName: z
    .string()
    .trim()
    .lowercase()
    .minLength([6, "Service name is required"]),
  vehicleType: z.enum(["sedan", "suv", "tempo-traveller"]).lowercase(),
  description: z.string().trim().minLength([1, "Description is required"]),
  features: z.array(z.string()).optional(),
});
