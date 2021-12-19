import { NextFunction, Request, Response } from "express";

export const errorNotFoundMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const errorMessage = `Endpoint not found: ${request.url}`;
  console.log(errorMessage);

  response.status(404).send(errorMessage);
};
