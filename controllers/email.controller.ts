import { Request, Response } from "express";
import rateLimit, { RateLimit } from "express-rate-limit";
import { EmailService } from "../services/email.service";
import { AbstractController } from "./abstract.controller";

export class EmailController extends AbstractController {
  private emailService: EmailService;
  private apiLimiter: RateLimit;

  constructor() {
    super();
    this.emailService = new EmailService();

    this.apiLimiter = rateLimit({
      windowMs: parseInt(process.env.EMAIL_RATE_LIMIT),
      max: parseInt(process.env.EMAIL_MAX),
      handler: (request: Request, response: Response) => {
        response.status(201).send("Request already made and email already sent");
      },
    });

    this.setEndpoints();
  }

  setEndpoints = (): void => {
    this.router.get("/me", this.apiLimiter, async (request: Request, response: Response) => {
      const email: string = await this.emailService.sendEmail();
      response.status(200).json({ yo: email });
    });
  };
}
