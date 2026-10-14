const errorHandler = (error, req, res, next) => {
  console.log(error);

  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal server error";

  if (error.name === "CastError") {
    statusCode = 400;
  }

  if (error.code === 11000) {
    statusCode = 409;
    message = "Resource already exists";
  }

  res.statusCode(statusCode).json({ sucess: false, message });
};

export default errorHandler;
