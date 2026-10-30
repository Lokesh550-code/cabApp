import express from "express";
import {
  getBookingController,
  getBookingsController,
} from "../controllers/booking.controllers.js";

const bookingRouter = express.Router();

// Only admin can see this, so it will be a protected route, only admin will see them, edit them, or delete them.
bookingRouter.get("/", getBookingsController);

bookingRouter.get("/:id", getBookingController);

export default bookingRouter;
