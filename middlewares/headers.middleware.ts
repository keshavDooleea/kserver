import { NextFunction, Request, Response } from "express";

export const headersMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const origins = ["http://localhost:3000"];
  response.setHeader("Access-Control-Allow-Origin", origins);
  next();
};
