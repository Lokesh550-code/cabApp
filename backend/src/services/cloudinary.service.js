import { Readable } from "node:stream";
import cloudinary from "../config/cloudinary.config.js";

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const options = {
      resource_type: "image",
    };
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          return reject(error);
        }

        return resolve({
          url: result.secure_url,
          public_id: result.public_id,
        });
      },
    );

    Readable.from(file.buffer).pipe(uploadStream);
  });
};

export const deleteImage = async (public_id) => {
  const deletedImage = await cloudinary.uploader.destroy(public_id);
  return deletedImage;
};
