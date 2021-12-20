import { Request, Response } from "express";
import { AbstractController } from "./abstract.controller";

export class BaseController extends AbstractController {
  constructor() {
    super();
    this.setEndpoints();
  }

  setEndpoints(): void {
    this.router.get("/", async (request: Request, response: Response) => {
      response.status(200).send("This is the server of Reetesh Dooleea");
    });
  }
}
