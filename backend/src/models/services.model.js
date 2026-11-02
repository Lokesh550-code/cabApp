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
    images: {
      type: [
        {
          url: {
            type: string,
            required: true,
            trim: true,
          },
          public_id: {
            type: String,
            required: true,
          },
        },
      ],
      validate: {
        validator: (image) => {
          image.length > 1;
        },
        message: "At least one image is required",
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

serviceSchema.index({ serviceName: 1, vehicleType: 1 }, { unique: true });

const serviceModel = mongoose.model("Service", serviceSchema);

export default serviceModel;
