import serviceModel from "../models/services.model.js";

export const getServices = async (req, res, next) => {
  try {
    const { page, limit } = req.validated.query;
    const skip = (page - 1) * limit;

    const [services, totalServices] = await Promise.all([
      serviceModel
        .find()
        .sort({ createdAt: -1, serviceName: -1 })
        .limit(limit)
        .skip(skip),

      serviceModel.countDocuments(),
    ]);

    const totalPages = Math.ceil(totalServices / limit);

    res.status(200).json({
      message: "Services fetched successfully",
      success: true,
      services,
      pagination: {
        pages,
        totalPages,
        totalServices,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getService = async (req, res, next) => {};
export const createServices = async (req, res, next) => {};
export const updateServices = async (req, res, next) => {};
export const deleteServices = async (req, res, next) => {};
