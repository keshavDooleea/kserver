import { Request, Response } from "express";
import { EmailService } from "../services/email.service";
import { AbstractController } from "./abstract.controller";

export class EmailController extends AbstractController {
  private emailService: EmailService;

  constructor() {
    super();
    this.emailService = new EmailService();
    this.setEndpoints();
  }

  setEndpoints = (): void => {
    this.router.get("/", async (request: Request, response: Response) => {
      const email: string = await this.emailService.sendEmail();
      response.status(200).json({ yo: email });
    });
  };
}
