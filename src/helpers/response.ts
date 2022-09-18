import { Response } from "express";

const response = (
  res: Response,
  statusCode: number,
  message: string,
  data: any
) => {
  return res.status(statusCode).json({
    code: statusCode,
    status: statusCode < 400 ? "success" : "failed",
    message,
    data,
  });
};

export default response;
