import { NextFunction, Request, Response } from "express";
import cors from "cors";
import { HTTP_CODE } from "../lib/http-code.lib";

// const origins = ["http://localhost:3000", "https://kdserver.vercel.app"];

export const corsOptions: cors.CorsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: HTTP_CODE.OK,
  methods: ["GET", "POST"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
};

export const headersMiddleware = (request: Request, response: Response, next: NextFunction) => {
  //   const { origin } = request.headers;

  //   // only allow required domains
  //   if (!origins.includes(origin)) {
  //     return response.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send("Origin not allowed");
  //   }

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  //   response.header("Access-Control-Allow-Credentials", "true");

  if (request.method === "OPTIONS") {
    return response.status(HTTP_CODE.OK).send("ok");
  }

  next();
};
