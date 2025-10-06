import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error('Error details:', {
    path: req.path,
    method: req.method,
    error: err.message,
    stack: err.stack
  });

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, try again later';
  res.status(statusCode).json({ msg, stack: process.env.NODE_ENV === 'development' ? err.stack : undefined });
};

export default errorHandlerMiddleware;
