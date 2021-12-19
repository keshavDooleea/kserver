import { NextFunction, Request, Response } from "express";

export const requestLoggerMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const locale = "en-CA";
  const date = new Date().toLocaleDateString(locale);
  const time = new Date().toLocaleTimeString(locale);

  console.log(`\n${time} on ${date}`);
  console.log(`${request.method} ${request.url}`);
  next();
};
