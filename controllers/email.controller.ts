import express, { Request, Response, Router } from "express";
import { EmailService } from "../services/email.service";

export class EmailController {
  private router: Router;
  private emailService: EmailService;

  constructor() {
    this.router = express.Router();
    this.emailService = new EmailService();

    this.setEndpoints();
  }

  getRouter = (): Router => this.router;

  private setEndpoints = (): void => {
    this.router.get("/", async (request: Request, response: Response) => {
      const email: string = await this.emailService.sendEmail();
      response.status(200).json({ yo: email });
    });
  };
}
