import { strictObject, z } from "zod";

export const createBookingSchema = strictObject({
  customerName: z.string().trim().min(6),
  mobileNumber: z
    .coerce()
    .string()
    .regex(/^[6-9]\d{9}$/),
  message: z.string().trim().optional(),
  pickupLocation: z.string().trim(),
  dropLocation: z.string().trim(),
  status: z
    .enum(["confirmed", "rejected", "pending", "completed", "cancelled"])
    .default("pending"),
  service: z.string().trim(),
});

export const updateBookingSchema = strictObject({});
