import express from "express";
import cors from "cors";
import { EmailController } from "./controllers/email.controller";
import baseRKDRouter from "./controllers/rkd.controller";
import { incomingRequestMiddleware } from "./middlewares/incoming-request.middleware";
import { errorNotFoundMiddleware } from "./middlewares/error.middleware";

// definitions
const port = 8080;
const app = express();

// middleware configurations
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// api
app.use(incomingRequestMiddleware);
app.use("/", baseRKDRouter);
app.use("/api/emails", new EmailController().getRouter());
app.use(errorNotFoundMiddleware);

app.listen(port, () => console.log(`RKD's server is listening on port ${port}`));
