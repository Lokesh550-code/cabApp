import ApiError from "../utils/ApiError.js";
import bookingModel from "../models/bookings.model";

// Fetches the bookings
export const getBookingsController = async (req, res, next) => {
  try {
    const { page, limit } = req.validated.query ?? 10;

    const skip = (page - 1) * limit;
    const [bookings, totalBookings] = await Promise.all([
      bookingModel
        .find()
        .sort({ createdAt: -1, customerName: -1 })
        .limit(limit)
        .skip(skip),
      bookingModel.countDocuments(),
    ]);

    const totalPages = Math.ceil(totalBookings / limit);

    res.status(200).json({
      message: "Fetched bookings successfully",
      status: true,
      bookings,
      pagination: {
        page,
        totalBookings,
        totalPages,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Fetch a single booking
export const getBookingController = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    const booking = await bookingModel.findById(bookingId);

    if (!booking) {
      throw new ApiError(404, "Booking not found");
    }
  } catch (error) {
    next(error);
  }
};

// creating a booking
export const createBooking = async (req, res, next) => {
  try {
    const {
      customerName,
      mobileNumber,
      message,
      pickupLocation,
      dropLocation,
      status,
      service,
    } = req.validated.body;

    const booking = await bookingModel.create({
      customerName,
      mobileNumber,
      message,
      pickupLocation,
      dropLocation,
      status,
      service,
    });

    res
      .status(201)
      .json({ message: "Booking successful", success: true, booking });
  } catch (error) {
    next(error);
  }
};

// update a booking

export const updateBooking = async (req, res, next) => {
  try {
    const update = req.validated.body;
    const bookingId = req.params.id;

    const updatedBooking = await bookingModel.updateOne(
      { _id: bookingId },
      { $set: update },
      { returnDocumnet: "after" },
    );

    if (!updatedBooking) {
      throw new ApiError(404, "Booking not found");
    }

    res.status(200).json({
      message: "Booking updated successfully",
      updatedBooking: {
        customerName: updatedBooking.customerName,
        mobileNumber: updatedBooking.mobileNumber,
        message: updatedBooking.message,
        pickupLocation: updateBooking.pickupLocation,
        dropLocation: updatedBooking.dropLocation,
        status: updatedBooking.status,
        service: updatedBooking.service,
        createdAt: updatedBooking.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
