import { uploadImage, deleteImage } from "./cloudinary.service.js";

export const createService = async (data, files) => {
  const uploadedImages = [];
  try {
    for (const file of files) {
      const image = await uploadImage(file);
      uploadedImages.push(image);
    }
  } catch (error) {
    for (const image of uploadedImages) {
      await deleteImage(image.public_id);
    }

    throw error;
  }
};
