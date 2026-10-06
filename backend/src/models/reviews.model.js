import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      types: String,
      required: true,
      trim: true,
    },
    imageURL: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [0.5, "rating cannot be less than 0.5"],
      max: [5, "ratiing cannot be more than 5"],
      validate: {
        validator: (value) => value % 0.5 === 0,
        message: "Rating must be in increments of 0.5",
      },
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const reviewModel = mongoose.model("Review", reviewSchema);

export default reviewModel;
