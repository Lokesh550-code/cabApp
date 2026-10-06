import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    imageURLs: {
      type: [String],
      required: true,
      validate: {
        validator: (images) => images.length >= 1,
        message: "At least one image is required",
      },
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["category", "cars", "drivers", "customer-trips", "tourist-places"],
    },
  },
  {
    timestamps: true,
  },
);

const galleryModel = mongoose.model("Gallery", gallerySchema);

export default galleryModel;
