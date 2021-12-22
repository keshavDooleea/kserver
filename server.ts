import micro from "micro-cors";
import * as dotenv from "dotenv";
import express from "express";
import session from "express-session";
import { BaseController } from "./controllers/base.controller";
import { requestLoggerMiddleware } from "./middlewares/request-logger.middleware";
import { errorNotFoundMiddleware } from "./middlewares/error.middleware";
import { ApiController } from "./controllers/api.controller";
import { sessionOptions } from "./lib/express-session.lib";
import { corsOptions, headersMiddleware } from "./middlewares/headers.middleware";

dotenv.config();

// definitions
const port = process.env.PORT || 8080;
const app = express();

// middleware configurations
function MyApi(req, res, next) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // handling other requests normally after this
  console.log("YO");
  next();
}

const cors = micro();

app.use(cors(MyApi));
app.use(express.json({ limit: "10mb" }));
app.use(session(sessionOptions));
// app.use(headersMiddleware);

// api
app.use(requestLoggerMiddleware);
app.use("/", new BaseController().getRouter()); // base endpoint: /
app.use("/api", new ApiController().getRouter()); // custom endpoints: /api/*
app.use(errorNotFoundMiddleware);

app.listen(port, () => console.log(`RKD's server is listening on port ${port}`));
