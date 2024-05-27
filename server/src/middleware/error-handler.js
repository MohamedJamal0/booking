import { StatusCodes } from 'http-status-codes';
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong try again later',
    type: err.type || 'Error',
  };

  return res.status(customError.statusCode).json({
    statusCode: customError.statusCode,
    message: customError.message,
    type: customError.type,
  });
};

export default errorHandlerMiddleware;
