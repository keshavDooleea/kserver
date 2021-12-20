import { NextFunction, Request, Response } from "express";
import { HTTP_CODE } from "../lib/http-code.lib";

export const errorNotFoundMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const errorMessage = `Endpoint not found: ${request.url}`;
  console.log(errorMessage);

  response.status(HTTP_CODE.NOT_FOUND).send(errorMessage);
};
