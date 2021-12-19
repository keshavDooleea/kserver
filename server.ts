import express from "express";
import cors from "cors";
import { RKDController } from "./controllers/rkd.controller";
import { requestLoggerMiddleware } from "./middlewares/request-logger.middleware";
import { errorNotFoundMiddleware } from "./middlewares/error.middleware";
import { ApiController } from "./controllers/api.controller";

// definitions
const port = 8080;
const app = express();

// middleware configurations
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// api
app.use(requestLoggerMiddleware);
app.use("/", new RKDController().getRouter()); // base endpoint: /
app.use("/api", new ApiController().getRouter()); // custom endpoints: /api/*
app.use(errorNotFoundMiddleware);

app.listen(port, () => console.log(`RKD's server is listening on port ${port}`));
