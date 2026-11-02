import serviceModel from "../models/services.model.js";
import { uploadImage, deleteImage } from "./cloudinary.service.js";

export const createService = async (data, files) => {
  const uploadedImages = [];
  try {
    for (const file of files) {
      const image = await uploadImage(file);
      uploadedImages.push(image);
    }

    const service = await serviceModel.create({
      ...data,
      images: uploadedImages,
    });

    return service;
  } catch (error) {
    for (const image of uploadedImages) {
      try {
        await deleteImage(image.public_id);
      } catch (cleanupError) {
        console.error(
          `Failed to delete image ${image.public_id}`,
          cleanupError,
        );
      }
    }

    throw error;
  }
};
