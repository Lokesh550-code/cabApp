import ApiError from "../utils/ApiError.js";
import bookingModel from "../models/bookings.model.js";

// Fetches all bookings
export const getBookings = async (req, res, next) => {
  try {
    const { page, limit } = req.validated.query;

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
      success: true,
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
export const getBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    const booking = await bookingModel.findById(bookingId);

    if (!booking) {
      throw new ApiError(404, "Booking not found");
    }

    res.status(200).json({
      message: "Fetched booking successfully",
      success: true,
      booking: {
        customerName: booking.customerName,
        mobileNumber: booking.mobileNumber,
        message: booking.message,
        pickupLocation: booking.pickupLocation,
        dropLocation: booking.dropLocation,
        status: booking.status,
        service: booking.service,
        createdAt: booking.createdAt,
      },
    });
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

    res.status(201).json({
      message: "Booking successful",
      success: true,
      booking: {
        customerName: booking.customerName,
        mobileNumber: booking.mobileNumber,
        message: booking.message,
        pickupLocation: booking.pickupLocation,
        dropLocation: booking.dropLocation,
        status: booking.status,
        service: booking.service,
        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

// update a booking
export const updateBooking = async (req, res, next) => {
  try {
    const update = req.validated.body;
    const bookingId = req.params.id;

    const updatedBooking = await bookingModel.findOneAndUpdate(
      { _id: bookingId },
      { $set: update },
      { returnDocument: "after" },
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
        pickupLocation: updatedBooking.pickupLocation,
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

// delete a booking
export const deleteBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    const deletedBooking = await bookingModel.findOneAndDelete(
      { _id: bookingId },
      { returnDocument: "after" },
    );

    if (!deletedBooking) {
      throw new ApiError(404, "No booking found");
    }

    res.status(200).json({
      message: "Booking deleted successfully",
      deletedBooking: {
        customerName: deletedBooking.customerName,
        mobileNumber: deletedBooking.mobileNumber,
        message: deletedBooking.message,
        pickupLocation: deletedBooking.pickupLocation,
        dropLocation: deletedBooking.dropLocation,
        status: deletedBooking.status,
        service: deletedBooking.service,
        createdAt: deletedBooking.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
