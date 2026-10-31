import ApiError from "../utils/ApiError.js";

const validate = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      const result = schema.safeParse(req[source]);

      if (!result.success) {
        const errors = result.error.issues.map((issue) => ({
          filed: issue.path.join("."),
          message: issue.message,
        }));

        throw new ApiError(400, "Validation failed", errors);
      }

      req.validated ??= {};
      req.validated[source] = result.data;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validate;
