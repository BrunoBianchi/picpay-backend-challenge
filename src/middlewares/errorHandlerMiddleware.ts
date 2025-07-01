import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { QueryFailedError } from "typeorm";

const handleZodError = (err: ZodError): string => {
  return err.errors.map((err) => `${err.message} in ${err.path}`).join(". ");
};
const handleQueryFailedError = (err: QueryFailedError): string => {
  return err.message.replace(/UQ_[A-Za-z0-9]+/, " ");
};

const APIError = (err: Error) => {
  const error = JSON.parse(err.message);
  const data = JSON.parse(error.message);
  return data.map((error: any) => error.constraints);
};

const errorsHandler = {
  ZodError: (err: Error): string => handleZodError(err as ZodError),
  Error: (err: Error): string => APIError(err),
  QueryFailedError: (err: Error): string =>
  handleQueryFailedError(err as QueryFailedError),
};

export const errorMiddleware: any = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({
    message: errorsHandler[err.name as keyof typeof errorsHandler]
      ? errorsHandler[err.name as keyof typeof errorsHandler](err)
      : "An unexpected error occurred",
  });
};
