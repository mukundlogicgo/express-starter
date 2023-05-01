import { PORT } from "../config/defaultValues.js";
import {
  errorResponse,
  successResponse,
} from "../helper/apiResponse.helper.js";

export const serverStatusController = async (req, res) => {
  try {
    return successResponse({
      res,
      message: `server is running on ${PORT}`,
      statusCode: 200,
    });
  } catch (error) {
    return errorResponse({
      res,
      statusCode: 500,
      message: `Internal server error`,
      error: error,
      funName: "serverStatusController",
    });
  }
};
