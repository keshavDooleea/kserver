import cors from "cors";
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
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(session(sessionOptions));
app.use(headersMiddleware);

// api
app.use(requestLoggerMiddleware);
app.use("/", new BaseController().getRouter()); // base endpoint: /
app.use("/api", new ApiController().getRouter()); // custom endpoints: /api/*
app.use(errorNotFoundMiddleware);

app.listen(port, () => console.log(`RKD's server is listening on port ${port}`));
