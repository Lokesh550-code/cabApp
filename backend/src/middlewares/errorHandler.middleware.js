import multer from "multer";

const errorHandler = (error, req, res, next) => {
  console.log(error);

  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";

  if (error instanceof multer.MulterError) {
    switch (error.code) {
      case "LIMIT_FILE_SIZE":
        statusCode = 413;
        message = "File size exceeds the allowed limit";
        break;
      case "LIMIT_FILE_COUNT":
        statusCode = 400;
        message = "File count exceeds the allowed limit";
        break;
      default:
        statusCode = 400;
        message = "Invalid file upload";
        break;
    }
  } else if (error.name === "CastError") {
    statusCode = 400;
  } else if (error.code === 11000) {
    statusCode = 409;
    message = "Resource already exists";
  }

  res.status(statusCode).json({ success: false, message, errors: error.errors });
};

export default errorHandler;
