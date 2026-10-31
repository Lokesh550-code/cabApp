import express from "express";
import {
  createBooking,
  getBookingController,
  getBookingsController,
  updateBooking,
} from "../controllers/booking.controllers.js";
import validate from "../middlewares/validation.middleware.js";
import {
  createBookingSchema,
  updateBookingSchema,
} from "../validators/booking.validator.js";

const bookingRouter = express.Router();

// Only admin can see this, so it will be a protected route, only admin will see them, edit them, or delete them.
bookingRouter.get("/", getBookingsController);

bookingRouter.get("/:id", getBookingController);

bookingRouter.post("/", validate(createBookingSchema, "body"), createBooking);

bookingRouter.patch("/:id", validate(updateBookingSchema), updateBooking);

export default bookingRouter;
