import multer from "multer";
import ApiError from "../utils/ApiError.js";

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 5,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    return cb(new ApiError(400, "Only JPEG, PNG, and WebP are allowed"));
  },
});

export default upload;
