import { success } from "zod";
import serviceModel from "../models/services.model.js";
import ApiError from "../utils/ApiError.js";

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
        page,
        totalPages,
        totalServices,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getService = async (req, res, next) => {
  try {
    const serviceId = req.params.id;

    const service = await serviceModel.findById(serviceId);

    if (!service) {
      throw new ApiError(404, "No service found");
    }

    res.status(200).json({
      message: "Fetched service successfully",
      success: true,
      service,
    });
  } catch (error) {
    next(error);
  }
};
export const createServices = async (req, res, next) => {};
export const updateServices = async (req, res, next) => {};
export const deleteServices = async (req, res, next) => {
  try {
    const serviceId = req.params.id;

    const deletedService = serviceModel.findOneAndDelete({ _id: serviceId });

    if (!deletedService) {
      throw new ApiError(404, "Service not found");
    }

    res
      .status(200)
      .json({
        message: "Service deleted successfully",
        success: true,
        deletedService,
      });
  } catch (error) {
    next(error);
  }
};
