import bookingModel from "../models/bookings.model";

// Fetches the booking on the
export const getBookingsController = async (req, res, next) => {
  try {
    const { page, limit } = req.validated.query ?? 10;

    const skip = (page - 1) * limit;
    const bookings = await Promise.all([
      bookingModel
        .find()
        .sort({ createdAt: -1, customerName: -1 })
        .limit(limit)
        .skip(skip),
      bookingModel.countDocuments(),
    ]);

    res.status(200).json({
      message: "Fetched bookings successfully",
      status: true,
      bookings,
      pagination: {
        page,
      },
    });
  } catch (error) {
    next(error);
  }
};
