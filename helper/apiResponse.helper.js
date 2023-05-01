import mongoose from "mongoose";

export const successResponse = ({ res, statusCode, message, data, count }) => {
  return res
    .status(statusCode)
    .json({ success: true, message: message, count: count, data: data });
};

export const errorResponse = ({ res, statusCode, message, error, funName }) => {
  console.log(`[ERROR] ${funName} : ${error.message}`);

  let errMsg;

  if (error instanceof mongoose.Error.CastError) {
    errMsg = "Invalid ID provided";
  } else if (error instanceof mongoose.Error.DocumentNotFoundError) {
    errMsg = "Document not found";
  } else if (error instanceof mongoose.Error.ValidationError) {
    errMsg = "Validation failed";
  } else {
    errMsg = "Internal server error, please try after some time";
  }

  return res
    .status(statusCode)
    .json({ success: false, message: message, error: errMsg });
};

export const validateResponse = ({ res, error }) => {
  const arrOjb = { message: "error" };

  error.details.map((item, key) => {
    const { path, message } = item;
    arrOjb = { ...arrOjb, [path]: message };
  });

  return res.status(400).json(arrOjb);
};
