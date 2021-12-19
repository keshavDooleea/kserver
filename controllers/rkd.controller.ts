import express, { Request, Response } from "express";

const baseRKDRouter = express.Router();

baseRKDRouter.get("/", async (request: Request, response: Response) => {
  response.status(200).send("This is the server of Reetesh Dooleea");
});

export default baseRKDRouter;
