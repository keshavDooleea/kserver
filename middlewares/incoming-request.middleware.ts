import { NextFunction, Request, Response } from "express";

export const incomingRequestMiddleware = (request: Request, response: Response, next: NextFunction) => {
  console.log(`\nIncoming HTTP request: ${request.method} ${request.url}`);
  next();
};
