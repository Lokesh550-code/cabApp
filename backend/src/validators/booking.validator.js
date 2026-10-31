import { z } from "zod";
import { ObjectId } from "mongodb";

export const createBookingSchema = z.strictObject({
  customerName: z.string().trim().min(6),
  mobileNumber: z.coerce.string().regex(/^[6-9]\d{9}$/),
  message: z.string().trim().optional(),
  pickupLocation: z.string().trim(),
  dropLocation: z.string().trim(),
  status: z
    .enum(["confirmed", "rejected", "pending", "completed", "cancelled"])
    .default("pending"),
  service: z
    .string()
    .trim()
    .refine(
      (val) =>
        ObjectId.isValid(val) &&
        ObjectId.createFromHexString(val).toString() === val,
      { message: "Invalid ObjectId format" },
    ),
});

export const updateBookingSchema = z
  .strictObject({
    customerName: z.string().trim().min(6).optional(),
    mobileNumber: z.coerce
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/)
      .optional(),
    message: z.string().trim().optional(),
    pickupLocation: z.string().trim().optional(),
    dropLocation: z.string().trim().optional(),
    status: z
      .enum(["confirmed", "rejected", "pending", "completed", "cancelled"])
      .optional(),
    service: z
      .string()
      .trim()
      .refine(
        (val) =>
          ObjectId.isValid(val) &&
          ObjectId.createFromHexString(val).toString() === val,
        { message: "Invalid ObjectId format" },
      )
      .optional(),
  })
  .refine((data) => Object.keys(data).length < 0, {
    message: "Enter at least one field to update",
  });
