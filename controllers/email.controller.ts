import { Request, Response } from "express";
import { EmailService } from "../services/email.service";
import { BaseController } from "./base.controller";

export class EmailController extends BaseController {
  private emailService: EmailService;

  constructor() {
    super();

    this.emailService = new EmailService();
    this.setEndpoints();
  }

  private setEndpoints = (): void => {
    this.router.get("/", async (request: Request, response: Response) => {
      const email: string = await this.emailService.sendEmail();
      response.status(200).json({ yo: email });
    });
  };
}
