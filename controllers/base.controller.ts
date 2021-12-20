import { Request, Response } from "express";
import { HTTP_CODE } from "../lib/http-code.lib";
import { AbstractController } from "./abstract.controller";

export class BaseController extends AbstractController {
  constructor() {
    super();
    this.setEndpoints();
  }

  setEndpoints(): void {
    this.router.get("/", async (request: Request, response: Response) => {
      response.status(HTTP_CODE.OK).send("This is the server of Reetesh Dooleea");
    });
  }
}
