import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class RKDController extends BaseController {
  constructor() {
    super();
  }

  protected setEndpoints(): void {
    this.router.get("/", async (request: Request, response: Response) => {
      response.status(200).send("This is the server of Reetesh Dooleea");
    });
  }
}
