import dotenv from "dotenv";
import StatusCodes from "../helpers/StatusCodes.js";

dotenv.config();

const notFound = (req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(StatusCodes.NOT_FOUND);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode =
    res.statusCode === StatusCodes.OK
      ? StatusCodes.INTERNAL_SERVER_ERROR
      : res.statusCode;
  res.status(statusCode);

  res.json({
    statusCode: statusCode,
    message: error.message,
    stacktrace:
      process.env.ENVIROMENT === "PRODUCTION" ? undefined : error.stack,
  });
};

export default {
  notFound,
  errorHandler,
};
