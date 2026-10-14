const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve()
      .then(fn(req, res, next))
      .catch((error) => next(error));
  };
};

export default asyncHandler;
