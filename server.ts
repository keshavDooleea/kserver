import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import session from "express-session";
import { BaseController } from "./controllers/base.controller";
import { requestLoggerMiddleware } from "./middlewares/request-logger.middleware";
import { errorNotFoundMiddleware } from "./middlewares/error.middleware";
import { ApiController } from "./controllers/api.controller";
import { sessionOptions } from "./lib/express-session.lib";

dotenv.config();

// definitions
const port = process.env.PORT || 8080;
const app = express();

// middleware configurations
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json({ limit: "10mb" }));
app.use(session(sessionOptions));

// api
app.use(requestLoggerMiddleware);
app.use("/", new BaseController().getRouter()); // base endpoint: /
app.use("/api", new ApiController().getRouter()); // custom endpoints: /api/*
app.use(errorNotFoundMiddleware);

app.listen(port, () => console.log(`RKD's server is listening on port ${port}`));
