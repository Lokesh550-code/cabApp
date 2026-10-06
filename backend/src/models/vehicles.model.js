import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imageURLs: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length >= 1,
        message: "At least one image is required",
      },
    },
    seatNumber: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
      min: [4, "Seats cannot be less than 4"],
      max: [8, "Seats cannot be more than 8"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["sedan", "suv", "temp-travell  er"],
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    luggageCapacity: {
      type: Number,
      required: true,
      min: [0, "Storage capacity of a car cannot be less than 0 liters"],
    },
    features: {
      type: String,
      default: [],
    },
  },
  { timestamps: true },
);

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);

export default vehicleModel;
