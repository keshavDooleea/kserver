import cors from "cors";

const origins = ["http://localhost:3000", "https://kdserver.vercel.app"];

export const corsOptions: cors.CorsOptions = {
  origin: origins,
  credentials: true,
  allowedHeaders: ["Content-Type"],
};
