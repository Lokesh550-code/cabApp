import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["sedan", "suv", "tempo-traveller"],
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageURLs: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length >= 1,
        message: "At least 1 image is required",
      },
    },
    features: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const serviceModel = mongoose.model("Service", serviceSchema);

export default serviceModel;
