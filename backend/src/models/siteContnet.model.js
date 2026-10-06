import mongoose from "mongoose";

const siteContentSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
      match: /^[6-9]\d{9}$/,
    },
    whatsapp: {
      type: String,
      required: true,
      trim: true,
      match: /^[6-9]\d{9}$/,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    socialLinks: {
      instagram: {
        type: String,
        trim: true,
      },
      facebook: {
        type: String,
        trim: true,
      },
    },
    heroText: {
      type: String,
      required: true,
      trim: true,
    },
    subHeroText: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const siteContentModel = mongoose.model("SiteContent", siteContentSchema);

export default siteContentModel;
