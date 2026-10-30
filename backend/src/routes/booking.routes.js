import express from "express";
import bookingModel from "../models/bookings.model.js";

const bookingRouter = express.Router();

// Only admin can see this, so it will be a protected route, only admin will see them, edit them, or delete them.
bookingRouter.get("/", );

export default bookingRouter;
