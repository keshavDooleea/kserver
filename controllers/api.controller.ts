import express, { Router } from "express";
import { EmailController } from "./email.controller";

export class ApiController {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.defineEndpoints();
  }

  getRouter = () => this.router;

  private defineEndpoints = () => {
    this.router.use("/emails", new EmailController().getRouter());
  };
}
