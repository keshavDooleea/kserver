import { NextFunction, Request, Response } from "express";
import cors from "cors";
import { HTTP_CODE } from "../lib/http-code.lib";

// const origins = ["http://localhost:3000", "https://kdserver.vercel.app"];

export const corsOptions: cors.CorsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: HTTP_CODE.OK,
  methods: "GET, POST",
};

export const headersMiddleware = (request: Request, response: Response, next: NextFunction) => {
  //   const { origin } = request.headers;

  //   // only allow required domains
  //   if (!origins.includes(origin)) return;

  //   response.header("Access-Control-Allow-Origin", origin);
  //   response.header("Access-Control-Allow-Methods", "GET, POST");
  //   response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};